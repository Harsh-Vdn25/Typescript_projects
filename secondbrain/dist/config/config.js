"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configs = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.Configs = {
    port: process.env['PORT'] || '',
    MONGO_URL: process.env['MONGO_URL'] || '',
    JWT_SECRET: process.env['JWT_SECRET'] || '',
    SALT_ROUNDS: Number(process.env['SALT_ROUNDS']) || 10
};
//# sourceMappingURL=config.js.map