import Course from "../../model/questions.model.js"

async function insertCourses(req,res){
    try{
        const {courseName}=req.body
        if(!courseName){
            return res.json({message:"course name is required"})
        }
        const data=await Course.create({course:courseName})
        if(!data){
            return res.json({message:"something went wrong"})
        }
        return res.json({message:"course inserted successfully"})

    }catch(error){
        console.error("something went wrong:",error)
        return res.json({message:error.message})
    }
}
export default insertCourses