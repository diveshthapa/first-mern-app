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
                resutl
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