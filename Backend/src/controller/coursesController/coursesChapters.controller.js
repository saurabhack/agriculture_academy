import Chapters from "../../model/chapters.model.js"

async function coursesChapter(req,res){
    try{
        const {id}=req.params
        const data=await Chapters.find({courseName:id})
        console.log(data)
        return res.json({data})
    }catch(error){
        return res.json({message:error.message})
    }
}

export default coursesChapter