function insertCourses(req,res){
    try{
        const {courseName}=req.body
        if(!courseName){
            return res.json({message:"course name is required"})
        }
        
    }catch(error){
        console.error("something went wrong:",error)
    }
}
export default insertCourses