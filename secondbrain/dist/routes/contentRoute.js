"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.contentRouter = (0, express_1.default)();
exports.contentRouter.post('/');
exports.contentRouter.get('/');
exports.contentRouter.put('/:id');
exports.contentRouter.delete('/:id');
exports.contentRouter.get('/:id');
//# sourceMappingURL=contentRoute.js.map