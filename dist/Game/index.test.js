"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tape_1 = __importDefault(require("tape"));
const Game_1 = __importDefault(require("@/Game"));
const Table_1 = __importDefault(require("@/Table"));
const __1 = require("..");
const GameState_1 = __importDefault(require("@/GameState"));
class TestTable extends Table_1.default {
    constructor() {
        super(6);
    }
}
class NewGame extends Game_1.default {
    constructor() {
        super(TestTable, 2);
    }
}
tape_1.default('Game should initialise', t => {
    const result = new NewGame();
    t.true(result);
    t.end();
});
tape_1.default('Game.add should add player to game', t => {
    const game = new NewGame();
    const player = new __1.Player();
    game.add('test', player);
    const actual = game.Players;
    const expected = new Map([['test', player]]);
    t.deepEqual(actual, expected);
    t.end();
});
tape_1.default('Game should have state `PreDeal` when player count has reached', t => {
    const game = new NewGame();
    game.add('test', new __1.Player());
    game.add('ey', new __1.Player());
    const actual = game.State;
    const expected = GameState_1.default.PreDeal;
    t.deepEqual(actual, expected);
    t.end();
});
tape_1.default('Game should call pre-deal', t => {
    t.end();
});
//# sourceMappingURL=index.test.js.map