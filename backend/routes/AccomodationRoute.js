const { addAccomodation, getAllAccomodations, getAccomodation, updateAccomodation } = require("../controller/AccomodationController")
const { isAuthenticated, authorizedRole } = require("../middleware/auth")


const router = require("express").Router()

router.post("/add",isAuthenticated, addAccomodation)
router.get("/all", getAllAccomodations)
router.get("/id", getAccomodation)
router.patch("/",isAuthenticated, updateAccomodation)




module.exports = router