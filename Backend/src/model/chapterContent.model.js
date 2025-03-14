import mongoose, { model } from "mongoose";

const chapterContentSchema=new mongoose.Schema({
    content:[{
        type:String,
        required:true    
    }],
    connectedChapter:{
        type:mongoose.Schema.Types.ObjectId, ref: "Chapters"
    }

})

const Content=mongoose.model("Content",chapterContentSchema)
export default Content