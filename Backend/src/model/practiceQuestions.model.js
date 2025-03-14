import mongoose from "mongoose";

const practiceQuestionsSchema=new mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    options:[{type:String}],
    correctAnswer:{
        type:String,
    },
    connectedChapter:{
        type:mongoose.Schema.Types.ObjectId, 
        ref: "Chapters"
    }
})

const PracticeModel=mongoose.model("PracticeModel",practiceQuestionsSchema)
export default PracticeModel