import { Request, Response } from "express";
import bcrypt, { hash } from "bcrypt";
import { UserModel } from "../models/usermodel";
import { getUserByname } from "../models/usermodel";
import { Configs } from "../config/config";
import { UserType } from "../models/usermodel";
import { Types } from "mongoose";
import { TokenCreation } from "../utils/TokenCreation";

interface SigninType {
  _id: Types.ObjectId;
  username: string;
  password: string;
}

const JWT_SECRET = Configs.JWT_SECRET;
export const Signup = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  try {
    const ExistingUser = await getUserByname(username);
    if (ExistingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }
    const hashedPassword: string = await bcrypt.hash(
      password,
      Configs.SALT_ROUNDS
    );
    const newUser: UserType = await UserModel.create({
      username: username,
      password: hashedPassword
    });
    const token:string=TokenCreation(newUser._id);
    res.status(200).json({
       message: "Signed up successfully",
       Token:token
     });
  } catch (err) {
    console.log("Serverside Error");
    res.status(500).json({ message: err });
  }
};

export const Signin = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  try {
    const UserData: SigninType | null = await UserModel.findOne({
      username,
    }).select("+password");
    if (!UserData) {
      res.status(400).json({ message: "User doesn't exist" });
      return;
    }

    const isValidated = await bcrypt.compare(password, UserData.password);
    if (!isValidated) {
      res.status(401).json({ message: "Wrong password" });
      return;
    }
    const token: string =TokenCreation(UserData._id); 
    res.status(200).json({
      message: "Signed in Successfully",
      Token: token,
    });
    return;
  } catch (err) {
    console.log("Serverside problem");
    return;
  }
};


