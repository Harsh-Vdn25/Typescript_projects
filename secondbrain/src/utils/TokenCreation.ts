import jwt from 'jsonwebtoken'
import { Configs } from '../config/config';
import { Types } from 'mongoose';
export const TokenCreation =(Id:Types.ObjectId)=>{
    const token=jwt.sign(
      {
        id: Id.toString(),
      },
      Configs.JWT_SECRET,{
        expiresIn:'2 days'
      }
    );
    return token;
}