import express from "express"
import insertCourses from "../controller/coursesController/insertCourses.controller.js"
const router=express.Router()

router.post('/createProject',insertCourses)

export default router