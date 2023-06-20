const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/my-react-app").then(() => {
    console.log("Database Connected successfully")
}).catch((err) => {
    console.log(err.message)
})