import {Request,Response} from 'express';
import { createUser } from '../models/usermodel';
export const Signup=async(req:Request,res:Response):Promise<void>=>{
    const {username,email,password}=req.body;
    try{
        const newUser=await createUser({username,email,password});
        if(!newUser){
            res.status(400).json({message:"Failed to login"});
            return;
        }
        res.status(200).json({message:"Signed up successfully "})
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Problem on the serverside"})
        return;
    }
}