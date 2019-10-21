"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tape_1 = __importDefault(require("tape"));
const Player_1 = __importDefault(require("@/Player"));
tape_1.default('Player should initialise', t => {
    const result = new Player_1.default();
    t.true(result);
    t.end();
});
//# sourceMappingURL=index.test.js.map