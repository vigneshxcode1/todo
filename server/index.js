import express, { json } from "express"
import mongoose from "mongoose"
import cors from 'cors'
import taskModel from "./models/task.js"
import dotenv from 'dotenv'
const app=express()
dotenv.config()
app.use(express.json())
app.use(cors())


app.post("/add",(req,res)=>{
    const task = req.body.task
    taskModel.create({
        task:task
    })
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
    
})

app.get("/get",(req,res)=>{
    taskModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.put("/update/:id",(req,res)=>{
    const {id} = req.params
    taskModel.findByIdAndUpdate({_id:id},{done:true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
app.delete("/delete/:id",(req,res)=>{
    const {id}=req.params
    taskModel.findByIdAndDelete({_id:id})
    .then(deletee=>res.json(deletee))
    .catch(err=>console.log(err))

})

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGODB);
  console.log("mongodb connect")
}

app.listen(process.env.PORT,(req,res)=>{
    console.log("port connect 8000")
})