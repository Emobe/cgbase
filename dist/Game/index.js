"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const croupier_1 = require("croupier");
const GameState_1 = __importDefault(require("@/GameState"));
const rxjs_1 = require("rxjs");
class Game {
    constructor(table, startOn) {
        this.dealer = new croupier_1.Croupier();
        this.players = new rxjs_1.BehaviorSubject([]);
        this.state = GameState_1.default.Initialising;
        this.table = new table();
        this.startOnCount = startOn;
        this.players.subscribe(this.userCountCheck);
    }
    preDeal(cb) {
        cb(this.dealer);
    }
    /**
     * Will change gamestate to `Playing` once specified count has been reached
     * @param players List of current players
     */
    userCountCheck(players) {
        if (players.length >= this.startOnCount) {
            this.state = GameState_1.default.Playing;
        }
    }
    /**
     * Returns the game state;
     */
    get State() {
        return this.state;
    }
}
exports.default = Game;
//# sourceMappingURL=index.js.map