"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameState;
(function (GameState) {
    GameState[GameState["Initialising"] = 0] = "Initialising";
    GameState[GameState["Waiting"] = 1] = "Waiting";
    GameState[GameState["PreDeal"] = 2] = "PreDeal";
    GameState[GameState["Playing"] = 3] = "Playing";
    GameState[GameState["Ending"] = 4] = "Ending";
    GameState[GameState["End"] = 5] = "End";
})(GameState || (GameState = {}));
exports.default = GameState;
//# sourceMappingURL=GameState.js.map