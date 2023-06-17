const jwt = require("jsonwebtoken")
const User = require("../models/UserModel")


exports.isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies["token"];
        if (!token) {
            return res.status(403).json({
                success: false,
                message: "Please Login To Continue",
            });
        }
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decodedData.id);
        req.user = user;
        next();

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


exports.authorizedRole = (...roles) => {
    return (req, res, next) => {
        const authorized = roles.includes(req.user.role);
        if (authorized) {
            next();
        } else {
            return res.status(403).json({
                success: false,
                message: "Access denied",
            });
        }
    }
}