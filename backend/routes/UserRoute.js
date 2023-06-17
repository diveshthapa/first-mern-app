const {register , login } = require("../controller/UserController")
const { isAuthenticated, authorizedRole } = require("../middleware/auth")


const router = require("express").Router()


router.post("/register", register)
router.post("/login", login)


module.exports = router