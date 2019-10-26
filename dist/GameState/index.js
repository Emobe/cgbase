"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameState;
(function (GameState) {
    GameState[GameState["Initialising"] = 0] = "Initialising";
    GameState[GameState["Waiting"] = 1] = "Waiting";
    GameState[GameState["PreDeal"] = 2] = "PreDeal";
    GameState[GameState["Dealing"] = 3] = "Dealing";
    GameState[GameState["Playing"] = 4] = "Playing";
    GameState[GameState["Ending"] = 5] = "Ending";
    GameState[GameState["End"] = 6] = "End";
})(GameState || (GameState = {}));
exports.default = GameState;
//# sourceMappingURL=index.js.map