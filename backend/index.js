const express = required("express")
const app=express()
import("dotenv").config;

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/my-react-app").then(()=>{
    console.log("Database Connected successfully")
}).catch((err)=>{
    console.log(err.message)
})


app.listen(process.env.PORT,()=>{
console.log("Server has started in port 5000")

})