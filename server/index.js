const express = require('express');
const dotenv = require('dotenv');
const morgan=require('morgan'); 
const mongoose = require('mongoose');
const cors=require('cors');
const todoRouter=require('./routes/todoRouter');

const app=express();

dotenv.config({path:'.env'});
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB)
.then(()=>{
    console.log("db connected successfully");
})
.catch((err)=>{
    console.log("err"+err);
})

app.use('/',todoRouter);

const PORT=8000;
app.listen(PORT,()=>{console.log(`Your server is running on the port ${PORT}`)})

