import mongoose from "mongoose";
import chapterSchema from "./chapters.model.js";

const practiceQuestionsSchema=new mongoose.Schema({
    practiceQuestion:[{type:String}],
    correctAnswer:{
        type:String,
    },
    connectedChapter:{
        type:mongoose.Schema.Types.ObjectId , ref: chapterSchema
    }
})

const PracticeModel=mongoose.model("practiceModel",PracticeModel)
export default PracticeModel