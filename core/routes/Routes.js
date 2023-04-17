import express from 'express'
import { toDoModel } from '../models/toDomodel.js';
import controller from '../controller/controller.js';
const Router=express.Router();
Router.get('/displayData',controller.getToDoData);
Router.get('/displayData/:id',controller.getOneuserData);
Router.post('/insertData',controller.postToDoData)
Router.put('/updateData/:id',controller.updateTodoData);
Router.delete('/deleteData/:id',controller.deleteData);


export {Router}