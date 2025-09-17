import express from 'express';
import {Signup} from '../controllers/authentication'
import { CheckUser } from '../middleware/UserCheck';

export const userRouter=express.Router();

userRouter.post('/signup',CheckUser,Signup);
userRouter.post('/signin',CheckUser);