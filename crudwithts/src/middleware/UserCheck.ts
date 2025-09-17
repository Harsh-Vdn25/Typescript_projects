import {Request,Response,NextFunction} from 'express';
import {getUserByEmail} from '../models/usermodel';

export const CheckUser=async(req:Request,res:Response,next:NextFunction):
Promise<void>=>{
    const {email}=req.body.email;
    const ExistingUser=await getUserByEmail(email);
    if(ExistingUser){
        console.log("Please Signin");
        res.status(400).json({message:"User already exists"});
        return;
    }
    next();
}