import express,{Request,Response} from 'express';
import { LinkModel } from '../models/linkmodel';
import { ContentModel } from '../models/contentmodel';
import { decodeToken } from '../middlewares/decodeToken';
import { random } from '../utils/utils';

export const brainRouter=express.Router();

brainRouter.post('/share',decodeToken,async(req:Request,res:Response)=>{
    const share=req.body.share;
    //@ts-ignore
    const userId=req.userId;
    if(share){
        const existingLink=await LinkModel.findOne({
            userId:userId
        })
        if(existingLink){
            res.json({
                hash:existingLink.hash
            })
            return;
        }
        const hash=random(10);
        const response=LinkModel.create({
            userId:userId,
            hash:hash
        })
        res.json(hash);
    }else{
        await LinkModel.deleteOne({
            userId: userId
        });

        res.json({
            message: "Removed link"
        })
    }
});

brainRouter.get('/:shareLink',async(req:Request,res:Response)=>{
    const hash=req.params.link;
    try{
        const link=await LinkModel.findOne({
            link:hash
        })
        if(!link){
            res.json({message:"Invalid link"});
            return ;
        }
        const userId=link.userId;
        const Content =await ContentModel.find({
            userId:userId
        })
        if(!Content){
            return res.json({messge:"No Brains present"});
        }
        res.status(200).json({
            Content
        })
    }catch(err){
        res.status(500).json({message:"Serverside problem"});
    }
});


// brainRouter.delete('/');

