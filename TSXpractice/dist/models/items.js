"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemModel = exports.connectDB = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const url = process.env['MONGO_URL'];
const connectDB = async () => {
    console.log(url);
    if (!url) {
        throw new Error('MONGO_URL is not defined');
    }
    await mongoose_1.default.connect(url);
    console.log("Connected");
};
exports.connectDB = connectDB;
const ItemSchema = new mongoose_2.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    cost: Number
});
exports.ItemModel = mongoose_1.default.model('item', ItemSchema);
//# sourceMappingURL=items.js.map