import {Request,Response,NextFunction} from 'express';
import {getUserByEmail} from '../models/usermodel';
import { UserDoc } from '../models/usermodel';

export const CheckUser=async(req:Request,res:Response,next:NextFunction):
Promise<void>=>{
    const {email}=req.body;
    console.log(email,req.body);
    if (!email) {
      res.status(400).json({ message: "Email is required" });
      return;
    }
    const ExistingUser:UserDoc=await getUserByEmail(email);
    if(ExistingUser){
        console.log("Please Signin");
        res.status(400).json({message:"User already exists"});
        return;
    }
    next();
}