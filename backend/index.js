const express = require("express")
const app = express()
require("dotenv").config()
require("./database/connection")

app.use(express.json())

const userRoute = require("./routes/UserRoute")
app.use("api/user", userRoute)


app.listen(process.env.PORT, () => {
    console.log(`Server has started in port ${process.env.PORT}`)

})