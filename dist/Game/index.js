"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameState_1 = __importDefault(require("@/GameState"));
const Debug_1 = __importDefault(require("@/Debug"));
const ts_collections_1 = require("@emobe/ts-collections");
const croupier_1 = require("croupier");
const rxjs_1 = require("rxjs");
class Game {
    constructor(table, startOn) {
        this.dealer = new croupier_1.Croupier();
        this.players = new ts_collections_1.ObservableDictionary([]);
        this.state = new rxjs_1.BehaviorSubject(GameState_1.default.Initialising);
        this.logger = Debug_1.default;
        this.table = new table();
        this.startOnCount = startOn;
        this.players.items$.subscribe(v => this.userCountCheck());
        this.state$ = this.state.asObservable();
    }
    preDeal(cb) {
        cb(this.dealer);
    }
    /**
     * Adds player to the game
     * @param key Key to reference the player by
     * @param player The player to add
     */
    add(key, player) {
        this.players.add(key, player);
    }
    get Players() {
        return this.players.Items;
    }
    /**
     * Returns the game state;
     */
    get State() {
        return this.state.value;
    }
    /**
     * Will change gamestate to `Playing` once specified count has been reached
     * @param players List of current players
     */
    userCountCheck() {
        if (this.players.count() >= this.startOnCount) {
            this.updateState(GameState_1.default.PreDeal);
        }
    }
    updateState(value) {
        this.state.next(value);
    }
    handleStates(state) {
        switch (state) {
            case GameState_1.default.Dealing:
                this.onDealing(state);
        }
    }
    onDealing(state) {
        this.logger.debug('dealing');
    }
}
exports.default = Game;
//# sourceMappingURL=index.js.map