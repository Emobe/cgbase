import { Card } from 'croupier';
export default class Player {
    private name;
    private id;
    private hand;
    /**
     * Creates a player
     * @param id The ID to use as the player reference
     * @param name The name of the player
     */
    constructor(id?: string, name?: string);
    handleTurn(): void;
    /**
     * Returns current hand
     */
    readonly Hand: Card[];
    /**
     * Returns current ID
     */
    readonly ID: string;
    /**
     * Returns current name
     */
    readonly Name: string;
}
