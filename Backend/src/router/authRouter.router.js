import express from "express"

import registerUser from "../controller/UserControllers/registerUser.controller.js"
import loginUser from "../controller/UserControllers/userLogin.controller.js"
import logOut from "../controller/UserControllers/logOut.controller.js"

const Router=express.Router()


Router.post("/signUp",registerUser)
Router.post("/login",loginUser)
Router.post("/logOut",logOut)


export default Router