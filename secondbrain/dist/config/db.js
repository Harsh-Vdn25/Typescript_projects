"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const url = config_1.Configs.MONGO_URL;
const DBConnect = async () => {
    if (!url) {
        throw new Error('MONGO_URL is undefined');
    }
    try {
        await mongoose_1.default.connect(url);
        console.log('Connected to database');
    }
    catch (err) {
        console.log(err);
    }
};
exports.DBConnect = DBConnect;
//# sourceMappingURL=db.js.map