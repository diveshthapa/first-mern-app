const Accomodation = require("../models/AccomodationModel")
const Booking = require("../models/BookingModel")


module.exports.addAccomodation = async (req, res, next) => {
    try {

        const {
            name,
            desc,
            price,
            wifi,
            pickup,
            allServices,
            telephone,
            hotel

        } = req.body;

        const accomodation = new Accomodation({
            name,
            desc,
            price,
            wifi,
            pickup,
            allServices,
            telephone,
            hotel
        })

        accomodation.save().then((data) => {
            return res.json({
                "success": true,
                data: data
            })
        })
            .catch((e) => {
                return res.json({
                    "success": false,
                    error: e
                })
            })

    } catch (error) {
        return res.json({
            msg: "Some Error Occured!",
            "success": false
        });
    }
}


module.exports.getAllAccomodations = async (req, res, next) => {
    try {
        const accomodations = await Accomodation.find().populate("hotel");
        return res.json({
            data: accomodations,
            "success": true
        });
    } catch (error) {
        return res.json({
            msg: "Some Error Occured!",
            "success": false
        });
    }
}

module.exports.getAccomodation = async (req, res, next) => {
    try {
        const id = req.params.id
        const accomodation = await Accomodation.findById(id).populate("hotel")
        let valid = true;
        let stat = "not";
        console.log(req.user)
        if (req.user) {
            console.log("Here")
            const user = req.user._id;
            const check = await Booking.findOne({
                user,
                accomodation,
            });
            if (check) {
                valid = false
                stat = check.status;
            }
        }
        return res.json({
            data: accomodation,
            "success": true,
            stat
        });
    } catch (error) {
        console.log(error)
        return res.json({
            msg: "Some Error Occured!",
            "success": false
        });
    }
}


module.exports.updateAccomodation = async (req, res, next) => {
    try {
        const {
            desc,
            price,
            wifi,
            pickup,
            allServices,
            telephone,
        } = req.body;
        const newData = {
            desc,
            price,
            wifi,
            pickup,
            allServices,
            telephone,
        }
        const id = req.params.id;
        const accomodation = await Accomodation.findByIdAndUpdate(id, newData, {
            new: true,
            runValidators: true
        })
        return res.json({
            success: true,
            accomodation,
        });
    } catch (error) {
        return res.json({
            success: false,
            msg: error.message,
        });
    }
}