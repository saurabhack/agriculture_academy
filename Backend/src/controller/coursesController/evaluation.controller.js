async function evaluation(req,res){
    const {id}=req.params
    const dataOfCourses=await axios.get(`http://localhost:3000/courses/chapters${id}`)
    console.log("courses are here==",dataOfCourses)

}
export default evaluation