import mongoose  from "mongoose";

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
    }
})

const User=mongoose.model("User",userSchema)
export default User