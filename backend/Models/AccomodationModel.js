const mongoose = require("mongoose")


const accomodationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    desc: {
        type: String,
        required: true,
        minLength: 3
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        default: "https://s7d2.scene7.com/is/image/ritzcarlton/laxlz-executive-suite-50675037?$XlargeViewport100pct$"
    },
    wifi: {
        type: Boolean,
        default: true
    },
    pickup: {
        type: Boolean,
        default: true
    },
    allServices: {
        type: Boolean,
        default: true
    },
    telephone: {
        type: Boolean,
        default: true
    },
    cons: {
        type: Boolean,
        default: true
    },

    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel",
    }

});

module.exports = mongoose.model("Accomodation", accomodationSchema)