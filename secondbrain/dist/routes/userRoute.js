"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.userRouter = express_1.default.Router();
const userController_1 = require("../controllers/userController");
exports.userRouter.post('/signup', userController_1.Signup);
exports.userRouter.post('/signin', userController_1.Signin);
//# sourceMappingURL=userRoute.js.map