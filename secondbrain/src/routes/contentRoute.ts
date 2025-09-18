import express from 'express';
export const contentRouter=express();

contentRouter.post('/');

contentRouter.get('/');

contentRouter.put('/:id');

contentRouter.delete('/:id');

contentRouter.get('/:id')