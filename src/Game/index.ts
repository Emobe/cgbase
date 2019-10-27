import Table from '@/Table';
import Player from '@/Player';
import Debug from '@/Debug';
import { ObservableDictionary } from '@emobe/ts-collections';
import { Croupier } from 'croupier';
import { BehaviorSubject, Observable } from 'rxjs';
import State, { GameState } from '@/GameState';

type PlayerCollection = ObservableDictionary<string, Player>;

export default abstract class Game<T extends Table> {
  private dealer = new Croupier();
  private players = new ObservableDictionary<string, Player>([]);
  private table: Table;
  private state: State = new State();
  private startOnCount: number;
  private logger = Debug;

  constructor(table: new () => T, startOn: number) {
    this.dealer.createDeck();
    this.table = new table();
    this.startOnCount = startOn;
    this.players.items$.subscribe(v => this.userCountCheck());
    this.state.current$.subscribe(state => {
      if (state === GameState.Dealing) {
        this.dealCards(2);
      }
    });
  }

  public preDeal(cb: (croupier: Croupier) => void) {
    cb(this.dealer);
  }

  /**
   * Adds player to the game
   * @param key Key to reference the player by
   * @param player The player to add
   */
  public add(key: string, player: Player) {
    this.players.add(key, player);
  }

  public get Players() {
    return this.players.Items;
  }

  /**
   * Returns the game state;
   */
  public get State(): GameState {
    return this.state.current;
  }

  /**
   * Will change gamestate to `Playing` once specified count has been reached
   * @param players List of current players
   */
  private userCountCheck() {
    if (this.players.count() >= this.startOnCount) {
      this.state.change(GameState.Dealing);
    }
  }

  private dealCards(amount: number) {
    for (let i = 0; i !== amount; i++) {
      this.players.Items.forEach(player => {
        player.give(this.dealer.take(1));
      });
    }
  }

  private onDealing(state: GameState) {
    this.logger.debug('dealing');
  }

  private play() {
    this.state.current$.subscribe(state => {
      while (state !== GameState.End) {}
    });
  }
}
