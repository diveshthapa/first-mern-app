
const { getAllBookings, getMyBookings, addBooking, getBooking, updateBooking } = require("../controller/BookingController")
const { isAuthenticated, authorizedRole } = require("../middleware/auth")


const router = require("express").Router()
router.get("/all", getAllBookings)
router.route("/my").get(isAuthenticated, getMyBookings)
router.route("/add").post(isAuthenticated, addBooking)
router.get("/:id", getBooking)
router.route("/:id").patch(isAuthenticated, updateBooking)

module.exports = router