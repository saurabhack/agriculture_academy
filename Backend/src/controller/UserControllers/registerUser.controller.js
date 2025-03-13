import User from "../../model/user.model.js"
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs"
async function registerUser(req,res){
    try{
    const {dateOfBirth,firstName,lastName,email,password}=req.body
    console.log("body of from front end == ",req.body)
    if(!dateOfBirth || !firstName || !lastName || !email  || !password){
        return res.json({message:"All fields are required"})
    }
    const existingUser=await User.findOne({email})
    if(existingUser){
        return res.json({message:"user is already exists "})
    }
    const hashedPassword=await bcrypt.hash(password,10)
    const data=await User.create({dateOfBirth,firstName,lastName,email,password:hashedPassword})
    const token=jwt.sign({name:data.name},process.env.JWT_SECRET,{expiresIn:'7d'})
    res.cookie('token',token,{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite:process.env.NODE_ENV==='production' ? 'none' : 'strict',
        maxAge:7*24*160*60*60*100
    })
    if(!data){
        return res.json({message:"something went wrong"})
    }
    return res.json({data:data})
    }catch(error){
        console.error(error.message)
        return res.json({message:error.message})
    }   
}
export default registerUser