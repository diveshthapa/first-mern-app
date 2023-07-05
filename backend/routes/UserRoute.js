const {register , login, logout, mydetails, updateProfile, allUsers, upgradeUser, deleteUser } = require("../controller/UserController")
const { isAuthenticated, authorizedRole } = require("../middleware/auth")


const router = require("express").Router()


router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.get("/me",isAuthenticated, mydetails)
router.patch("/",isAuthenticated, updateProfile)
router.patch("/upgrade",isAuthenticated, upgradeUser)
router.get("/all",isAuthenticated, allUsers)
router.delete("/",isAuthenticated, deleteUser)




module.exports = router