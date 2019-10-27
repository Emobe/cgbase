import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from '..';

export enum GameState {
  Initialising,
  Waiting,
  PreDeal,
  Dealing,
  Playing,
  Ending,
  End
}

export default class State {
  current$: Observable<GameState>;
  current: GameState;
  public initialise: Function;
  public start: Function;
  public end: Function;
  private subject = new BehaviorSubject<GameState>(GameState.Initialising);
  constructor() {
    this.current$ = this.subject.asObservable();
    this.current = this.subject.value;
  }
  change(state: GameState) {
    this.subject.next(state);
  }
}
