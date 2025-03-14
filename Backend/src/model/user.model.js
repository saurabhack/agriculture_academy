import mongoose  from "mongoose";
import Course from "./questions.model.js"

const userSchema=new mongoose.Schema({
    dateOfBirth:{
        type:String,
        require:true
    },
    firstName:{
        type:String,
        require:true
    },
    lastNage:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    selectedCourses:[{type:mongoose.Schema.Types.ObjectId , ref:"Course"}],
    performance:[
        {
            correctAnswers:{
                type:Number,
            },
            selectedCoursesId:{
                type:mongoose.Schema.Types.ObjectId,ref:"Course"
            }
        }
        
    ]
})

const User=mongoose.model("User",userSchema)
export default User