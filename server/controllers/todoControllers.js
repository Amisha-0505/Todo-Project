const Todo=require('./../models/todoModel');


exports.getAllTodos=async(req,res)=>{
    try{
    const todos=await Todo.find();

    res.status(200).json({
        status:'success',
        task:{
            todos
        }
    });
    }catch(err){
        console.log(err);
        res.status(404).json({
            status:'fail',
            message:err
        })
    };
};


exports.createTodo=async(req,res)=>{
    try{
      await Todo.create({task :req.body.item} );
       const newTodo=await Todo.find()

        res.status(201).json({
            status:'success',
            task:{
                todo:newTodo
            }
        });
    }
    catch(err){
        console.log(err)
        res.status(400).json({
            status:'fail',
            message:'Invalid data sent'
        })
    }
};


exports.deleteTodo=async(req,res)=>{
    try{
        await Todo.findByIdAndDelete(req.params.id);
        const todo=await Todo.find();
        res.status(200).json({
            status:'success',
            task:{
                todo
            }
        });
    }
    catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        })
    };
};