import Table from '@/Table';
import GameState from '@/GameState';
import Player from '@/Player';
import { Croupier } from 'croupier';
import { Observable } from 'rxjs';
export default abstract class Game<T extends Table> {
    state$: Observable<GameState>;
    private dealer;
    private players;
    private table;
    private state;
    private startOnCount;
    private logger;
    constructor(table: new () => T, startOn: number);
    preDeal(cb: (croupier: Croupier) => void): void;
    /**
     * Adds player to the game
     * @param key Key to reference the player by
     * @param player The player to add
     */
    add(key: string, player: Player): void;
    readonly Players: Map<string, Player>;
    /**
     * Returns the game state;
     */
    readonly State: GameState;
    /**
     * Will change gamestate to `Playing` once specified count has been reached
     * @param players List of current players
     */
    private userCountCheck;
    private updateState;
    private handleStates;
    private onDealing;
}
