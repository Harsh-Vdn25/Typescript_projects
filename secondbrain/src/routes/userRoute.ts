import express from 'express';
export const userRouter=express.Router();
import { Signup,Signin } from '../controllers/userController';
import { inputCheck } from '../middlewares/inputValidation';

userRouter.post('/signup',inputCheck,Signup);

userRouter.post('/signin',inputCheck,Signin);