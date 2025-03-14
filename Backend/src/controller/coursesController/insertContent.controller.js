import Content from "../../model/chapterContent.model.js"

async function insertContent(req,res){
    try {   
        const {content}=req.body
        const {id}=req.params
        if(!content){
            return res.json({message:"content is required"})
        }
        const addedData=await Content.create({content,connectedChapter:id})
        console.log(addedData)
        return res.json({message:"content inserted successfully == ",data:addedData})
    } catch (error) {
        console.error("something went wrong with this")
        return res.json({message:error.message})
    }
}

export default insertContent