import express from 'express';
import { Configs } from './config/config';
import { DBConnect } from './config/db';
import { number } from 'zod';
const app=express();
app.use(express.json());

const port:number=parseInt(Configs.port);
async function main():Promise<void>{
    await DBConnect();
    app.listen(port,()=>{
        console.log(`Server is listening on port ${port}`)
    })
}

main();