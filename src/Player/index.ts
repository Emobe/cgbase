import { Card } from 'croupier';
import nanoid from 'nanoid';

export default class Player {
  private name: string;
  private id: string;
  private hand: Card[] = [];

  /**
   * Creates a player
   * @param id The ID to use as the player reference
   * @param name The name of the player
   */
  constructor(id: string = nanoid(), name: string = 'bigfish') {
    this.name = name;
    this.id = id;
  }

  public handleTurn() {}

  /**
   * Returns current hand
   */
  public get Hand() {
    return this.hand;
  }

  public give(card: Card[]) {
    this.hand.push(...card);
  }

  /**
   * Returns current ID
   */
  public get ID() {
    return this.id;
  }

  /**
   * Returns current name
   */
  public get Name() {
    return this.name;
  }
}
