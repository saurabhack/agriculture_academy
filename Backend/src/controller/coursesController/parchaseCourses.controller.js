import User from "../../model/user.model.js"
async function parchaseCourses(req,res){
    try {
        const {id} = req.params
        const {email}=req.body
        const courses=[]
        courses.push(id)
        const data=await User.findOneAndUpdate({email:email},{$push:{selectedCourses:id}})
        if(!data){
            return res.json({message:"user is not exists"})
        }
        return res.json({message:"user is successfully this course",data})
    } catch (error) {
        console.error("something went wrong =",error.message)
        return res.json({message:error.message})
    }
}
export default parchaseCourses