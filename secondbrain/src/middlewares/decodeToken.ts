import {Request,Response,NextFunction} from 'express';
import jwt,{JwtHeader, JwtPayload,Secret} from 'jsonwebtoken';
import { Configs } from '../config/config';

interface returnType{
    userId:string|JwtPayload
}

const JWT_SECRET:Secret=Configs.JWT_SECRET

export const decodeToken=async(req:Request,res:Response,next:NextFunction)=>{
    const BearerToken=req.headers['authorization'];
    const token=BearerToken?.split(' ')[1];
    if(!token){
        res.status(400).json({message:'No token'})
        return;
    }
     try {
    const decoded = jwt.verify(token as string, JWT_SECRET);
    if (typeof decoded === "string") {
      return res.status(403).json({ message: "Invalid token payload" });
    }
    //@ts-ignore
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};