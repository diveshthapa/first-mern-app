const mongoose = require("mongoose")

const hotelSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLenght:3
    },
    city:{
        type:String,
        required:true,
        minLenght:5
    },
    logo:{
        type:String,
        default:"https://logowik.com/hyatt-regency-hotels-logo-vector-svg-pdf-ai-eps-cdr-free-download-18072.html",
        
    }
})

module.exports = mongoose.model("Hotel", hotelSchema)