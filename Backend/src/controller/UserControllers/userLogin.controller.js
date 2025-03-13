import User from "../../model/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
async function userLogin(req,res){
    const {email,password}=req.body
    if(!email || !password){
        return res.json({message:"all fields are require"})
    }
    try{
        const users=await User.findOne({email})
        if(!users){
            return res.json({message:"user is not available"})
        } 
        const isMatch=  bcrypt.compare(password,users.password)
        if(!isMatch){
            return res.json({message:"this password is not matching"})
        }
        const token=jwt.sign({name:users.name},process.env.JWT_SECRET,{expiresIn:'7d'})

        res.cookie('token',token,{
                httpOnly:true,
                secure:process.env.NODE_ENV==="production",
                sameSite:process.env.NODE_ENV==='production' ? 'none' : 'strict',
                maxAge:7*24*160*60*60*100
        })
        return res.json({message:"user is successfully logged in"})
    }catch(error){
        console.error(error.message)
        return res.json({message:error.message})
    }
}
export default userLogin