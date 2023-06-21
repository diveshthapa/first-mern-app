const { getAllHotels, addHotel, updateHotel } = require("../controller/HotelController")
const { isAuthenticated, authorizedRole } = require("../middleware/auth")


const router = require("express").Router()


router.post("/add",isAuthenticated, addHotelel)
router.get("/all", getAllHotels)
router.get("/id", getHotel)
router.patch("/",isAuthenticated, updateHotel)




module.exports = router