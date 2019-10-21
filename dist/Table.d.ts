import Player from './Player';
export default class Table {
    private seats;
    private maxPlayers;
    constructor(maxPlayers: number, ...players: Player[]);
    addPlayer(player: Player, seat?: number): void;
    readonly isFull: boolean;
    readonly Players: Map<number, Player>;
}
