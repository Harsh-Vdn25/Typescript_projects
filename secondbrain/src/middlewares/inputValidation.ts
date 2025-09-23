import {Request,Response,NextFunction} from 'express';
import { z,safeParse } from 'zod';

export function inputCheck(req:Request,res:Response,next:NextFunction){
    const requiredbody=z.object({
        usernam:z.string().min(3),
        password:z.string().min(7),
    })
    const IpValidated=requiredbody.safeParse(req.body);
    if(!IpValidated){
        res.json({message:"Invalid input"});
        return;
    }
    next();
}