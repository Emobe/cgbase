"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nanoid_1 = __importDefault(require("nanoid"));
class Player {
    /**
     * Creates a player
     * @param id The ID to use as the player reference
     * @param name The name of the player
     */
    constructor(id = nanoid_1.default(), name = 'bigfish') {
        this.name = name;
        this.id = id;
    }
    handleTurn() { }
    /**
     * Returns current hand
     */
    get Hand() {
        return this.hand;
    }
}
exports.default = Player;
//# sourceMappingURL=index.js.map