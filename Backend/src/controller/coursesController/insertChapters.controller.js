import Chapters from "../../model/chapters.model.js"

async function insertChapters(req,res){
    try {
        const {chapterName}=req.body
        const {id}=req.params
        console.log("chapters are here ==",chapterName)
        if(!chapterName){
            console.log("chapter name is required")
            return res.josn({message:"chapter name is required !!"})
        }
        const data=await Chapters.create({chapterName,courseName:id})
        console.log(data)
        return res.json({message:"chapter added successfully",data})
    } catch (error) {
        console.error("something went wrong ",error.message)
        return res.json({message:error.message})
    }
}

export default insertChapters