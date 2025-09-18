import {Request,Response,NextFunction} from 'express';
import { ContentModel } from "../models/contentmodel";

export const checkContent=async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
    const id=req.params.id;
    try{
        const content=await ContentModel.findOne({
            _id:id
        })
        if(!content){
            res.status(400).json({message:"Requested content doesnot exist"});
            return;
        }
        next();
    }catch(err){
        res.status(500)
    }
}