const express = require("express")
const app = express()
const morgan = require("morgan")

require("dotenv").config()
require("./database/connection")

app.use(express.json())
app.use(morgan("dev"))

const userRoute = require("./routes/UserRoute")
app.use("/api/user", userRoute)


app.listen(process.env.PORT, () => {
    console.log(`Server has started in port ${process.env.PORT}`)

})