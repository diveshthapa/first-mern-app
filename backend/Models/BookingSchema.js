const mongoose = require("mongoose")


const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    accomodation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Accomodation"
    },
    status: {
        type: String,
        minLength: 3,
        default: "Under-Review"
    },
    checkin: {
        type: Date,
        required: true,
    },
    checkout: {
        type: Date,
        required: true,
    },


});

module.exports = mongoose.model("Booking", bookingSchema)