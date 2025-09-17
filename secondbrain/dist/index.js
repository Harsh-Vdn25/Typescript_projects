"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const db_1 = require("./config/db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = parseInt(config_1.Configs.port);
async function main() {
    await (0, db_1.DBConnect)();
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}
main();
//# sourceMappingURL=index.js.map