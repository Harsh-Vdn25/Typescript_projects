import dotenv from 'dotenv'
dotenv.config();
import mongoose from "mongoose";
import { Schema } from "mongoose";


const url=process.env['MONGO_URL']


export const connectDB=async()=>{
    if(!url){
        throw new Error('MONGO_URL is not defined')
    }
    await mongoose.connect(url);
    console.log("Connected");
}

const ItemSchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    cost:Number
})

export const ItemModel=mongoose.model('item',ItemSchema);

