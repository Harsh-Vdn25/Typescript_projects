import {Request,Response} from 'express';
import { UserModel } from '../models/usermodel';
import { getUserByname } from '../models/usermodel';

export const Signup=async(req:Request,res:Response):Promise<void>=>{
    const {username,password,firstName,lastName}=req.body;
    try{
        const ExistingUser=await getUserByname(username);
    }catch(err){
        console.log("Serverside Error");
    }
}

export const Signin=async(req:Request,res:Response):Promise<void>=>{
    const {username,password}=req.body;
    try{
    }catch(err){
        console.log("Serverside problem");
        return;
    }
}