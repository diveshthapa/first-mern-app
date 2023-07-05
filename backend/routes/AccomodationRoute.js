const { addAccomodation, getAllAccomodations, getAccomodation, updateAccomodation } = required("../controller/AccomodationController")
const { isAuthenticated, authorizedRole } = require("../middleware/auth")

const router = require("express").Router()

router.post("/add", isAuthenticated, addAccomodation)
router.get("/all", getAllAccomodations)
router.get("/:id", allBoth, getAccomodation)
router.patch("/:id", isAuthenticated, updateAccomodation)

module.exports = router