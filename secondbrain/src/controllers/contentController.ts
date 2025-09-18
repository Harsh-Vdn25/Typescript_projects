import {Request,Response} from 'express';
import {ContentModel} from '../models/contentmode'

export const postContent=async(req:Request,res:Response):Promise<void>=>{
    const {title,link,type,tags}=req.body;
    try{
        //fetch userId from the token
        
    }catch(err){
        console.log(err);
        res.status(500).json({message:'Serverside problem'});
    }
}
export const readAllContent=async(req:Request,res:Response):Promise<void>=>{

}
export const updateContent=async(req:Request,res:Response):Promise<void>=>{

}
export const deleteContent=async(req:Request,res:Response):Promise<void>=>{

}
export const readContent=async(req:Request,res:Response):Promise<void>=>{

}

