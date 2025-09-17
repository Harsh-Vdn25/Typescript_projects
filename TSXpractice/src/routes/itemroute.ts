import express from 'express';

import {
    AddItem,
    readItems,
    readItem,
    removeItem,
    updateItem
} from '../controllers/itemcontroller'

const ItemRouter=express.Router();


ItemRouter.post('/',AddItem)
ItemRouter.get('/',readItems)
ItemRouter.get('/:id',readItem)
ItemRouter.delete('/:id',removeItem)
ItemRouter.put('/:id',updateItem);

export  {ItemRouter};