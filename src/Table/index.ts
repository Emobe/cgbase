import { Deck } from 'croupier';
import Player from '@/Player';
import { Dictionary } from '@emobe/ts-collections';

export type Seats = Dictionary<number, Player>;

export default class Table {
  private seats: Seats = new Dictionary<number, Player>([]);
  private maxPlayers: number;

  constructor(maxPlayers: number, ...players: Player[]) {
    this.maxPlayers = maxPlayers;
  }

  public addPlayer(player: Player, seat: number = 0) {
    if (seat <= this.maxPlayers) {
      this.seats.add(seat, player);
    }
  }

  get isFull(): boolean {
    return this.maxPlayers === this.seats.Items.size;
  }

  get Players() {
    return this.seats;
  }
}
