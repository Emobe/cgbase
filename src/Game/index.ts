import Table from '@/Table';
import GameState from '@/GameState';
import Player from '@/Player';
import Debug from '@/Debug';
import { ObservableDictionary } from '@emobe/ts-collections';
import { Croupier } from 'croupier';
import { BehaviorSubject, Observable } from 'rxjs';
import { EventEmitter } from 'events';

type PlayerCollection = ObservableDictionary<string, Player>;

export default abstract class Game<T extends Table> extends EventEmitter {
  public state$: Observable<GameState>;

  private dealer = new Croupier();
  private players = new ObservableDictionary<string, Player>([]);
  private table: Table;
  private state = new BehaviorSubject<GameState>(GameState.Initialising);
  private startOnCount: number;
  private logger = Debug;

  constructor(table: new () => T, startOn: number) {
    super();
    this.table = new table();
    this.startOnCount = startOn;
    this.players.items$.subscribe(v => this.userCountCheck());
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
    return this.state.value;
  }

  /**
   * Will change gamestate to `Playing` once specified count has been reached
   * @param players List of current players
   */
  private userCountCheck() {
    if (this.players.count() >= this.startOnCount) {
      this.emit('deal', this.dealer);
      this.updateState(GameState.Dealing);
    }
  }

  private dealCards(amount: number) {
    this.players.Items.forEach(player => {
      player.give(this.dealer.take(1));
    });
  }

  private updateState(value: GameState) {
    this.state.next(value);
  }

  private handleStates(state: GameState) {
    switch (state) {
      case GameState.Dealing:
        this.onDealing(state);
    }
  }

  private onDealing(state: GameState) {
    this.logger.debug('dealing');
  }
}
