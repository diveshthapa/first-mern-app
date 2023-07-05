const Booking = require("../models/BookingModel")
const Accomodation = require("../models/AccomodationModel")


module.exports.addBooking = async (req, res, next) => {
    try {

        const {
            accomodation,
            checkin,
            checkout
        } = req.body;

        const user = req.user._id;

        const check = await Booking.findOne({
            user,
            accomodation,
        });


        if (check) {
            return res.json({
                error: "Verification Failed! Booking Already Exists!",
                "success": false
            });
        }

        const booking = new Booking({
            user,
            accomodation,
            checkin,
            checkout
        })

        booking.save().then((data) => {
            return res.json({
                "success": true,
                data: data,

            })
        })
            .catch((e) => {
                console.log(e)
                return res.json({
                    "success": false,
                    error: e
                })
            })

    } catch (error) {
        console.log(error)
        return res.json({
            error: "Some Error Occured!",
            "success": false
        });
    }
}


module.exports.getAllBookings = async (req, res, next) => {
    try {
        const bookings = await Booking.find();
        return res.json({
            data: bookings,
            "success": true
        });
    } catch (error) {
        return res.json({
            msg: "Some Error Occured!",
            "success": false
        });
    }
}


module.exports.getMyBookings = async (req, res, next) => {
    try {
        const user = req.user
        const bookings = await Booking.find({ user: user._id }).populate("accomodation");
        console.log(bookings)
        return res.json({
            data: bookings,
            "success": true
        });
    } catch (error) {
        console.log(error)
        return res.json({
            msg: "Some Error Occured!",
            "success": false
        });
    }
}

module.exports.getBooking = async (req, res, next) => {
    try {
        const id = req.params.id
        const booking = await Booking.findById(id);

        return res.json({
            data: booking,
            "success": true
        });
    } catch (error) {
        return res.json({
            msg: "Some Error Occured!",
            "success": false
        });
    }
}


module.exports.updateBooking = async (req, res, next) => {
    try {
        const {
            status
        } = req.body;
        const newData = {
            status
        }
        const id = req.params.id
        const booking = await Booking.findByIdAndUpdate(id, newData, {
            new: true,
            runValidators: true
        })
        return res.json({
            success: true,
            booking,
        });
    } catch (error) {
        return res.json({
            success: false,
            msg: error.message,
        });
    }
}