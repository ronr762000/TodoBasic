require("./db/connect")
const express=require('express');
const app=express()
const port=5000;
const connectDB = require("./db/connect")
require("dotenv").config()
const tasks=require("./router/tasks")

//middlewears
app.use(express.json());

app.use("/api/v1/tasks" , tasks)


const start = async()=>{
try{
await connectDB(process.env.MONGO_DB_URI)
app.listen(port,console.log(`server is listening on ${port}`))
} catch(error){
    console.log(error);
}
}

start();