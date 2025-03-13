async function logOut(req,res){
    try{
        res.clearCookie('token',{
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            sameSite: process.env.NODE_ENV==="production" ? "none" : "strict"
        })
        return res.json({message:"logged out"})
    }catch(error){
        console.error(error.message)
        res.json({message:error.message})
    }

}
export default logOut