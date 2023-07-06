const multer = require("multer")
const Accomodation = require("../models/AccomodationModel")
const Booking = require("../models/BookingSchema")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'backend/uploads/accomodation')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, `${uniqueSuffix}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })




module.exports.addAccomodation = [upload.single("image"), async (req, res, next) => {
    console.log(req.body)
    console.log(req.file)
    try {

        const {
            name,
            desc,
            price,
            wifi,
            pickup,
            allServices,
            telephone,
            hotel,
            cons

        } = req.body;

        const accomodation = new Accomodation({
            name,
            desc,
            price,
            wifi,
            pickup,
            allServices,
            telephone,
            hotel,
            cons,
            image: req.file.path
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
}]


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
            stat,
            valid
        });
    } catch (error) {
        console.log(error)
        return res.json({
            msg: "Some Error Occured!",
            "success": false
        });
    }
}


module.exports.updateAccomodation = [upload.single("image"), async (req, res, next) => {
    try {
        const {
            id,
            name,
            desc,
            price,
            wifi,
            pickup,
            allServices,
            telephone,
            cons
        } = req.body;
        console.log(req.body.id)
        const newData = {
            name,
            desc,
            price,
            wifi,
            pickup,
            allServices,
            telephone,
            cons
        }
        if (req.file) {
            newData.image = req.file.path
        }

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
}]