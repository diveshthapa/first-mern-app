const express = require("express")
const app = express()
const morgan = require("morgan")
const cookieParser = require("cookie-parser")

require("dotenv").config({ path: "backend/.env" })
require("./database/connection")

app.use(cookieParser())
app.use(morgan("dev"))
app.use(express.json())

const userRoute = require("./routes/UserRoute")
const hotelRoute = require("./routes/HotelRoute")
const accomodationRoute = require("./routes/AccomodationRoute")
const bookingRoute = require("./routes/BookingRoute")

app.use("/api/user", userRoute)
app.use("/api/hotel", hotelRoute)
app.use("/api/acc", accomodationRoute)
app.use("/api/book", bookingRoute)


app.listen(process.env.PORT, () => {
    console.log(`Server has started in port ${process.env.PORT}`)

})