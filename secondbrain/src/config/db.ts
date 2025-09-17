import mongoose from 'mongoose';
import { Configs } from "./config"; 

const url:string=Configs.MONGO_URL;

export const DBConnect=async():Promise<void>=>{
    if(!url){
        throw new Error('MONGO_URL is undefined')
    }
    try{
        await mongoose.connect(url);
        console.log('Connected to database');
    }catch(err){
        console.log(err);
    }
}