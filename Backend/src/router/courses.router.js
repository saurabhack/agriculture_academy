import express from "express"
import insertCourses from "../controller/coursesController/insertCourses.controller.js"
import insertChapters from "../controller/coursesController/insertChapters.controller.js"
import insertContent from "../controller/coursesController/insertContent.controller.js"
import insertPracticeQuestions from "../controller/coursesController/insertPracticeQuestions.controller.js"
import parchaseCourses from "../controller/coursesController/parchaseCourses.controller.js"
import coursesChapter from "../controller/coursesController/coursesChapters.controller.js"
import questions from "../controller/coursesController/questions.controller.js"
const router=express.Router()

router.post('/createCourse',insertCourses)
router.post('/createChapter/:id',insertChapters)
router.post('/createPractice/:id',insertPracticeQuestions)
router.post('/createContent/:id',insertContent)
router.post('/parchaseCourse/:id',parchaseCourses)
router.get("/chapters/:id",coursesChapter)
router.get("/questions/:id",questions)
export default router