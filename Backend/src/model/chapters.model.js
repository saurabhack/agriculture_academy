import mongoose from "mongoose";

const chapterSchema=new mongoose.Schema({
    chapterName:{
        type:String,
        required:true
    },
    courseName:{
        type:mongoose.Schema.Types.ObjectId , ref:"Course",
    }

})

const Chapters=mongoose.model("Chapters",chapterSchema)
export default Chapters