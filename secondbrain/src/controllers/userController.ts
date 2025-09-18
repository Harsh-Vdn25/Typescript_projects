import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";
import { UserModel } from "../models/usermodel";
import { getUserByname } from "../models/usermodel";
import { Configs } from "../config/config";
import { UserType } from "../models/usermodel";
import { Types } from "mongoose";
interface SigninType {
  _id: Types.ObjectId;
  username: string;
  password: string;
}

const JWT_SECRET = Configs.JWT_SECRET;
export const Signup = async (req: Request, res: Response): Promise<void> => {
  const { username, password, firstName, lastName } = req.body;
  try {
    console.log(username);
    const ExistingUser = await getUserByname(username);
    if (ExistingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }
    console.log("here");
    const hashedPassword: string = await bcrypt.hash(
      password,
      Configs.SALT_ROUNDS
    );
    const newUser: UserType = await UserModel.create({
      username: username,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });
    console.log(newUser);
    res.status(200).json({ message: "Signed up successfully" });
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
    console.log(password);
    const isValidated = await bcrypt.compare(password, UserData.password);
    if (!isValidated) {
      res.status(401).json({ message: "Wrong password" });
      return;
    }
    const token: string = jwt.sign(
      {
        id: UserData._id.toString(),
      },
      Configs.JWT_SECRET,{
        expiresIn:'2 days'
      }
    );
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
