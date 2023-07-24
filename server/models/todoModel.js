const mongoose=require('mongoose');

const todoScheme= new mongoose.Schema({
   task:{
    type:String,
    required:true
   }

});

const Todo=mongoose.model('Todo',todoScheme);

module.exports=Todo;