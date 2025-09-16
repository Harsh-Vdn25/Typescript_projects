"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const items_1 = require("./models/items");
const itemroute_1 = require("./routes/itemroute");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env['PORT'];
app.use('/items', itemroute_1.ItemRouter);
async function main() {
    await (0, items_1.connectDB)();
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}
main();
//# sourceMappingURL=server.js.map