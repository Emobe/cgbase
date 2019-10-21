"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tape_1 = __importDefault(require("tape"));
const Game_1 = __importDefault(require("@/Game"));
const Table_1 = __importDefault(require("@/Table"));
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
tape_1.default('Should start the game once specified player count has been reached', t => {
    const count = 6;
    t.end();
});
//# sourceMappingURL=index.test.js.map