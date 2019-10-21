"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tape_1 = __importDefault(require("tape"));
const Table_1 = __importDefault(require("@/Table"));
const Player_1 = __importDefault(require("@/Player"));
tape_1.default('Should add player to table', t => {
    const table = new Table_1.default(6);
    const player = new Player_1.default();
    table.addPlayer(player, 1);
    const actual = table.Players.size;
    const expected = 1;
    t.deepEqual(actual, expected);
    t.end();
});
//# sourceMappingURL=index.test.js.map