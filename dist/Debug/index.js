"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
exports.default = winston_1.default.createLogger({
    transports: [
        new winston_1.default.transports.Console()
        //new winston.transports.File({ filename: 'combined.log' })
    ]
});
//# sourceMappingURL=index.js.map