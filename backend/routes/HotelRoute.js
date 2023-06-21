const { isAuthenticated, authorizedRole } = require("../middleware/auth")


const router = require("express").Router()


router.post("/add",isAuthenticated, addHotel)




module.exports = router