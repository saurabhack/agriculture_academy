import PracticeModel from "../../model/practiceQuestions.model.js"
async function questions(req,res){
    try {
    const {id}=req.params
    const data=await PracticeModel.find({connectedChapter:id})
    console.log("data is here == ",data)
    return res.json(data)
    } catch (error) {
        console.error("something went wrong",error.message)
        return res.json({message:error.message})
    }
}
export default questions