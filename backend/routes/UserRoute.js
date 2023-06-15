const { sayHello, register } = require("../controller/UserController")

const router = require("express").Router()


router.get("/test", sayHello)
router.post("/register", register)


module.exports = router