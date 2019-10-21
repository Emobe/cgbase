import { Deck } from 'croupier';
import Player from '@/Player';

type Seats = Map<number, Player>;

export default class Table {
  private seats: Seats = new Map<number, Player>();
  private maxPlayers: number;

  constructor(maxPlayers: number, ...players: Player[]) {
    this.maxPlayers = maxPlayers;
  }

  public addPlayer(player: Player, seat: number = 0) {
    if (seat <= this.maxPlayers) {
      this.seats.set(seat, player);
    }
  }

  //  public deal() { // TODO circular dealing
  //    this.seats.forEach(seat => {
  //      // players.Hand = this.deck.take(2);
  //    });
  //  }

  get isFull(): boolean {
    return this.maxPlayers === this.seats.size;
  }

  get Players() {
    return this.seats;
  }
}
