import express from 'express';
export const userRouter=express.Router();
import { Signup,Signin, ShareBrain } from '../controllers/userController';

userRouter.post('/signup',Signup);

userRouter.post('/signin',Signin);

userRouter.get('/shareBrain/:uid',ShareBrain);
