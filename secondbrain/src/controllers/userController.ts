import {Request,Response} from 'express';
import jwt from 'jsonwebtoken';
import bcrypt, { hash } from 'bcrypt';
import { UserModel } from '../models/usermodel';
import { getUserByname } from '../models/usermodel';
import { Configs } from '../config/config';
import { UserType } from '../models/usermodel';

interface SigninType{
    _id:string;
    username:string;
    password:string;
}

const JWT_SECRET=Configs.JWT_SECRET;
export const Signup=async(req:Request,res:Response):Promise<void>=>{
    const {username,password,firstName,lastName}=req.body;
    try{
        const ExistingUser=await getUserByname(username);
        if(ExistingUser){
            res.status(400).json({message:"User already exists"});
            return;
        }
        const hashedPassword:string=await bcrypt.hash(password,Configs.SALT_ROUNDS);
        const newUser:UserType=await UserModel.create({
            username:username,
            password:hashedPassword,
            firstName:firstName,
            lastName:lastName
        })
        console.log(newUser);
        res.status(200).json({message:"Signed up successfully"});
    }catch(err){
        console.log("Serverside Error");
    }
}

export const Signin=async(req:Request,res:Response):Promise<void>=>{
    const {username,password}=req.body;
    try{
        const UserData:(SigninType|null)=await UserModel.findOne({username}).select('+password');
        if(!UserData){
            res.status(400).json({message:"User doesn't exist"})
            return;
        }
        const isValidated=await bcrypt.compare(UserData.password,password);
        if(!isValidated){
            res.status(401).json({message:"Wrong password"});
        }
        const token:string=jwt.sign({
          id:UserData._id  
        },Configs.JWT_SECRET);
        res.status(200).json({
            message:"Signed in Successfully",
            Token:token
        })
    }catch(err){
        console.log("Serverside problem");
        return;
    }
}
