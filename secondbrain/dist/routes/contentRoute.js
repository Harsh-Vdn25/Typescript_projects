"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.contentRouter = (0, express_1.default)();
const decodeToken_1 = require("../middlewares/decodeToken");
exports.contentRouter.post('/', decodeToken_1.decodeToken);
exports.contentRouter.get('/', decodeToken_1.decodeToken);
exports.contentRouter.put('/:id', decodeToken_1.decodeToken);
exports.contentRouter.delete('/:id', decodeToken_1.decodeToken);
exports.contentRouter.get('/:id', decodeToken_1.decodeToken);
//# sourceMappingURL=contentRoute.js.map