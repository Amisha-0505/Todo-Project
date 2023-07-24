const express=require('express');

const todoControllers=require('../controllers/todoControllers.js');

const router=express.Router();

router
    .route('/')
    .get(todoControllers.getAllTodos);
router
    .route('/add')    
    .post(todoControllers.createTodo);
router
    .route('/delete/:id')        
    .post(todoControllers.deleteTodo);

module.exports=router;    