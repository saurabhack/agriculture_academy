import PracticeModel from "../../model/practiceQuestions.model.js"
async function insertPracticeQuestions(req,res){
    try {
        
        const {question,options,correctAnswer}=req.body
        const {id}=req.params
        if(options.length>4 ){
            return res.json({message:"questions should be 4"})
        }
        if(!question || !correctAnswer || !options){
            return res.json({message:"question and correct answer and options are required"})
        }
        const addedData=await PracticeModel.create({question,options,correctAnswer,connectedChapter:id})
        console.log(addedData)
        return res.json({message:"question is inserted and options are created",data:addedData})
    } catch (error) {
        console.error("something went wrong with this")
        return res.json({message:error.message})
    }
}

export default insertPracticeQuestions