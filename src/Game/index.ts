import Table from '@/Table';
import Player from '@/Player';
import Debug from '@/Debug';
import { ObservableDictionary } from '@emobe/ts-collections';
import { Croupier } from 'croupier';
import { BehaviorSubject, Observable } from 'rxjs';
import State, { GameState } from '@/GameState';

export type PlayerCollection = ObservableDictionary<string, Player>;
export type TurnList = Player[];

export default abstract class Game<T extends Table> {
  private dealer = new Croupier();
  private players = new ObservableDictionary<string, Player>([]);
  private table: Table;
  private state: State = new State();
  private startOnCount: number;
  private logger = Debug;
  private dealAmount: number;
  public playing: Function;

  /**
   * Abstract class to create Games with
   * @param table Type of Table to use
   * @param dealAmount Amount of cards to deal per player
   * @param startOn Number of players to wait for before starting the game
   */
  constructor(table: new () => T, dealAmount: number, startOn: number) {
    this.dealer.createDeck();
    this.table = new table();
    this.startOnCount = startOn;
    this.dealAmount = dealAmount;
    this.players.items$.subscribe(v => this.userCountCheck());
    this.state.current$.subscribe(state => {
      if (state === GameState.Dealing) {
        this.dealCards();
      } // else if (state === GameState.Playing) {
      // this.play();
      //}
    });
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

  private dealCards() {
    for (let i = 0; i !== this.dealAmount; i++) {
      this.players.Items.forEach(player => {
        player.give(this.dealer.take(1));
      });
    }
    this.state.change(GameState.Playing);
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
