import { Player } from '..';
import { PlayerCollection } from '@/Game';
import { onErrorResumeNext } from 'rxjs';
import { Seats } from '@/Table';

export default class TurnHandler {
  private current = 0;
  private players: Seats;
  constructor(players: Seats) {
    this.players = players;
    this.next = this.next.bind(this);
  }

  takeTurn(cb: (player: Player, next: () => void) => void) {
    cb(this.players.get(this.current), this.next);
  }

  public get Current() {
    return this.current;
  }

  private next() {
    this.current++;
  }
}
