import express from 'express';
export const contentRouter=express();
import { decodeToken } from '../middlewares/decodeToken';
import {
    postContent,
    readAllContent,
    updateContent,
    deleteContent,
    readContent
} from '../controllers/contentController'
import { checkContent } from '../middlewares/checkContent';

contentRouter.post('/',decodeToken,postContent);

contentRouter.get('/',decodeToken,readAllContent);

contentRouter.put('/:id',decodeToken,checkContent,updateContent);

contentRouter.delete('/:id',decodeToken,checkContent,deleteContent);

contentRouter.get('/:id',decodeToken,checkContent,readContent);