import mongoose from "mongoose";

const correctAnswerSchema = new mongoose.Schema({
    answer: {
        type: String,
        required: true
    }
});

const chapterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    practiceQuestions: [
        {
            question: String, 
            correctAnswer: correctAnswerSchema 
        }
    ]
});

const courseSchema = new mongoose.Schema({
    course: {
        type: String,
        required: true
    },
    chapters: [chapterSchema] 
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
