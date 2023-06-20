const {register , login, logout } = require("../controller/UserController")
const { isAuthenticated, authorizedRole } = require("../middleware/auth")


const router = require("express").Router()


router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)


module.exports = router