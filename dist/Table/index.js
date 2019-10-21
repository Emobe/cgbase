"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Table {
    constructor(maxPlayers, ...players) {
        this.seats = new Map();
        this.maxPlayers = maxPlayers;
    }
    addPlayer(player, seat = 0) {
        if (seat <= this.maxPlayers) {
            this.seats.set(seat, player);
        }
    }
    //  public deal() { // TODO circular dealing
    //    this.seats.forEach(seat => {
    //      // players.Hand = this.deck.take(2);
    //    });
    //  }
    get isFull() {
        return this.maxPlayers === this.seats.size;
    }
    get Players() {
        return this.seats;
    }
}
exports.default = Table;
//# sourceMappingURL=index.js.map