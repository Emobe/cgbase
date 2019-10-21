import { Croupier } from 'croupier';
import GameState from './GameState';
export default abstract class Game {
    private dealer;
    private players;
    private table;
    private state;
    private startOnCount;
    constructor(playerCount: number, startOn: number);
    preDeal(cb: (croupier: Croupier) => void): void;
    /**
     * Will change gamestate to `Playing` once specified count has been reached
     * @param players List of current players
     */
    private userCountCheck;
    /**
     * Returns the game state;
     */
    readonly State: GameState;
}
