import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv";
import Router from "./src/router/authRouter.router.js";

dotenv.config();

const app=express();
app.use(express.json())

app.use("/auth",Router)


const port=process.env.PORT || 5000;

mongoose.connect("mongodb://127.0.0.1:27017/agriculture").then(()=>{
    console.log('mongodb is connected successfully')
}).catch((error)=>{
console.error("something went wrong with this == ",error.message)
})


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})