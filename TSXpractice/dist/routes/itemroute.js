"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRouter = void 0;
const express_1 = __importDefault(require("express"));
const itemcontroller_1 = require("../controllers/itemcontroller");
const ItemRouter = express_1.default.Router();
exports.ItemRouter = ItemRouter;
ItemRouter.post('/', itemcontroller_1.AddItem);
ItemRouter.get('/', itemcontroller_1.readItems);
ItemRouter.get('/:id', itemcontroller_1.readItem);
ItemRouter.delete('/:id', itemcontroller_1.removeItem);
ItemRouter.put('/:id', itemcontroller_1.updateItem);
//# sourceMappingURL=itemroute.js.map