import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        default:false
    }
})

const taskModel= mongoose.model("task",taskSchema)
export default taskModel