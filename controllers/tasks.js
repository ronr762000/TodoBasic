const Task = require("../models/tasks")
const getAllTasks = async(req,res)=>{
  try{
    const task=await Task.find({});
   res.status(200).json({task}); 
  }catch(error){
    res.status(500).json({message:error})
  }
}
const createTask=async (req,res)=>{
    const {name , completed} = req.body;
    try{
    const task = await Task.create({name,completed})
    res.status(201).json({task})
    }
    catch(error){
        res.status(500).json({message : error})
    }
}
const getSingleTask = async(req,res)=>{
       try{
    const id= req.params.id;
    const task = await Task.findById(id);
    if(!task) return res.status(404).json({message : "No id found"})
    return res.status(200).json({task})
    } catch(error){
        res.status(500).json({message : error})
    }
}
const updateTask= async (req,res)=>{
    const {name , completed}=req.body;
    const {id} = req.params.id
    try{
        const task = await Task.findOneAndUpdate({id},{name,completed},{
            new : true,
            runValidators:true
        })
        res.status(200).json({
            task
        })
    }  catch(error){
        res.status(500).json({message : error})
    }
}
const deleteTask =async(req,res)=>{
    const {id} = req.params.id;
    try{
        const task = await Task.findOneAndDelete({id});
        res.status(200).json({
            task
        })
    }catch(err){
        res.status(500).json({message : err})
    }
}

module.exports={
    getAllTasks , createTask , getSingleTask , updateTask , deleteTask
}