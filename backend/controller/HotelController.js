const Hotel = require("../models/HotelModel")

module.exports.addHotel = async (req, res) => {

    try {
        const { name, city, country } = req.body;
        const usedHotelName = await Hotel.findOne({ name })
        if (usedHotelName) {
            return res.json({
                "success": false,
                "msg": " Hotel with this name already exists"
            })
        }

        const newHotel = new Hotel({ name, city, country })
        newHotel.save().then((resutl) => {
            return res.json({
                "success": true,
                result
            })
        })
            .catch((err) => {
                return res.json({
                    "success": false,
                    "msg": error.message
                })
            })


    } catch (error) {
        return res.json({
            "success": false,
            "msg": error.message
        })
    }
}

module.exports.getAllHotels = async (req, res) => {

    try {
        const hotels = await Hotel.find()
        return res.json({
            "success": true,
            hotels
        })
    } catch (error) {

        return res.json({
            "success": false,
            "msg": error.message
        })
    }

}

module.exports.getHotel = async (req, res, next) => {
    try {
        const id = req.params.id
        const hotel = await Hotel.findById(id);
        return res.json({
            data: hotel,
            status: true
        });
    } catch (error) {
        return res.json({
            msg: "Some Error Occured!",
            status: false
        });
    }
}


module.exports.updateHotel = async (req, res) => {
    try {
        const {
            name,
            city,
            country,
            id
        } = req.body;
        const newData = {
            name,
            city,
            country
        }
        const hotel = await Hotel.findByIdAndUpdate(id, newData, {
            new: true,
            runValidators: true
        })
        return res.json({
            success: true,
            hotel,
        });
    } catch (error) {
        return res.json({
            success: false,
            msg: error.message,
        });
    }
}