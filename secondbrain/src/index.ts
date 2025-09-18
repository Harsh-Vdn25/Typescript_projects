import express from 'express';
import { Configs } from './config/config';
import { DBConnect } from './config/db';
import { userRouter } from './routes/userRoute';
import { contentRouter } from './routes/contentRoute';
const app=express();
app.use(express.json());

app.use('/api/v1/user',userRouter);
app.use('/api/v1/content',contentRouter);

const port:number=parseInt(Configs.port);
async function main():Promise<void>{
    await DBConnect();
    app.listen(port,()=>{
        console.log(`Server is listening on port ${port}`)
    })
}

main();