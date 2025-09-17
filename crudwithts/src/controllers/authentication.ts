import { Request, Response } from "express";
import { createUser } from "../models/usermodel";
import { authentication, random } from "../helpers/index";
import { getUserByEmail } from "../models/usermodel";

export const Signup = async (req: Request, res: Response): Promise<void> => {
  const { username, email, password } = req.body;
  try {
    const salt = random();
    const newUser = await createUser({
      username,
      email,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });
    if (!newUser) {
      res.status(400).json({ message: "Failed to login" });
      return;
    }
    res.status(200).json({ message: "Signed up successfully " });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Problem on the serverside" });
    return;
  }
};

export const Signin = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  try {
    const user = await getUserByEmail(email).select(
      "+authentication.salt +authentication.password"
    );
    if (!user) {
      res.status(400).json({ message: "please signup" });
      return;
    }
    const expectedHash = authentication(user.authentication.salt, password);
    console.log(expectedHash);
    if (user.authentication.password !== expectedHash) {
      res.status(401).json({ message: "Wrong Password" });
      return;
    }
    const salt = random();
    user.authentication.sessionToken = authentication(
      salt,
      user._id.toString()
    );
    await user.save();

    res.cookie("HARSH-COOKIE", user.authentication.sessionToken, {
      domain: "localhost",
      path: "/",
    });

    res.status(200).json({ message: "Signed in" });
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server side problem" });
  }
};