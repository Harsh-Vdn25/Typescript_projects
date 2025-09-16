import express from 'express';
import {connectDB} from './models/items'
import { ItemRouter } from './routes/itemroute';
import dotenv from 'dotenv';
dotenv.config();
const app=express();

const port=process.env['PORT'];

app.use('/items',ItemRouter);

async function main(){
    await connectDB();
    app.listen(port,()=>{
        console.log(`Server is listening on port ${port}`)
    })
}

main();