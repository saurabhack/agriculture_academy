import axios from "axios"
async function evaluation(req,res){
    const {id}=req.params
    const dataOfCourses=await axios.get(`http://localhost:3000/courses/chapters/${id}`)
    console.log("courses are here==",dataOfCourses)
    const ids=dataOfCourses.data._id
    console.log(ids)
    const questions=await axios.get(`http://localhost:3000/courses/questions/${id}`)
    return res.json({message:"happening"})
}
export default evaluation