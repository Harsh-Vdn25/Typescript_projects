"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signin = exports.Signup = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const usermodel_1 = require("../models/usermodel");
const usermodel_2 = require("../models/usermodel");
const config_1 = require("../config/config");
const JWT_SECRET = config_1.Configs.JWT_SECRET;
const Signup = async (req, res) => {
    const { username, password, firstName, lastName } = req.body;
    try {
        console.log(username);
        const ExistingUser = await (0, usermodel_2.getUserByname)(username);
        if (ExistingUser) {
            res.status(400).json({ message: "User already exists" });
            return;
        }
        console.log('here');
        const hashedPassword = await bcrypt_1.default.hash(password, config_1.Configs.SALT_ROUNDS);
        const newUser = await usermodel_1.UserModel.create({
            username: username,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        });
        console.log(newUser);
        res.status(200).json({ message: "Signed up successfully" });
    }
    catch (err) {
        console.log("Serverside Error");
        res.status(500).json({ message: err });
    }
};
exports.Signup = Signup;
const Signin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const UserData = await usermodel_1.UserModel.findOne({ username }).select('+password');
        if (!UserData) {
            res.status(400).json({ message: "User doesn't exist" });
            return;
        }
        console.log(password);
        const isValidated = await bcrypt_1.default.compare(password, UserData.password);
        if (!isValidated) {
            res.status(401).json({ message: "Wrong password" });
            return;
        }
        const token = jsonwebtoken_1.default.sign({
            id: UserData._id
        }, config_1.Configs.JWT_SECRET);
        res.status(200).json({
            message: "Signed in Successfully",
            Token: token
        });
        return;
    }
    catch (err) {
        console.log("Serverside problem");
        return;
    }
};
exports.Signin = Signin;
//# sourceMappingURL=userController.js.map