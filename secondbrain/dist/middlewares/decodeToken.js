"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
const JWT_SECRET = config_1.Configs.JWT_SECRET;
const decodeToken = async (req, res, next) => {
    const token = req.headers['token'];
    if (!token) {
        res.status(400).json({ message: 'No  token' });
        return;
    }
    const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
    if (!decoded) {
        return res.status(403).json({ message: "You are not logged in" });
    }
    //@ts-ignore
    req.userId = decoded.id;
    next();
};
exports.decodeToken = decodeToken;
//# sourceMappingURL=decodeToken.js.map