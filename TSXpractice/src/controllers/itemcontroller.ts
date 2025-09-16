import {Request,Response} from 'express'
import {ItemModel} from '../models/items.js'

export const AddItem=async(req:Request,res:Response):Promise<void>=>{
    const {name,cost}=req.body;
    try{
        const response=await ItemModel.create({
            name:name,
            cost:cost
        })
        if(!response){
           res.status(400).json({message:"Failed to create"})
           return;
        }
        res.status(200).json({message:""})
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Server side problem"})
    }
}

export const readItems=async(res:Response)=>{
    try{
        const response=await ItemModel.find();
        if(!response){
         res.status(400).json({message:"No items present"})
         return;
        }
        res.status(200).json(response);
    }catch(err){
        console.log(err);
    }
}

export const readItem=async(req:Request,res:Response):Promise<void>=>{
    const id=req.params['id'];
    try{
        const response=await ItemModel.findOne({
            _id:id
        });
        if(!response){
             res.status(400).json({message:"No item found"})
             return;
        }
        res.status(200).json(response);
    }catch(err){
        console.log(err);
    }
}

export const removeItem=async(req:Request,res:Response):Promise<void>=>{
    const id=req.params['id'];
    try{
        const response=await ItemModel.deleteOne({
            _id:id
        });
        if(!response){
             res.status(400).json({message:"No item found"})
             return;
        }
        res.status(200).json(response);
    }catch(err){
        console.log(err);
    }
}


export const updateItem=async(req:Request,res:Response):Promise<void>=>{
    const id=req.params['id'];
    const {name,cost}=req.body;
    try{
        const response=await ItemModel.updateOne({
            _id:id
        },{
            name:name,
            cost:cost
        });
        if(!response){
             res.status(400).json({message:"No item found"});
             return;
        }
        res.status(200).json(response);
    }catch(err){
        console.log(err);
    }
}

