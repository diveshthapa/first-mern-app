const User = require("../models/UserModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const generateToken = (id) => {
    const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
        "expiresIn": "1d"
    })
    return token;
}


module.exports.register = async (req, res, next) => {
    try {
        const { fname, lname, email, username, password } = req.body;

        const usernameCheck = await User.findOne({ username })
        if (usernameCheck) {
            return res.json({
                "success": false,
                "msg": "Username Already Taken"
            })
        }
        const emailCheck = await User.findOne({ email })
        if (emailCheck) {
            return res.json({
                "success": false,
                "msg": "Email Address Already in Use"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User({ fname, lname, username, email, password: hashedPassword })
        user.save().then((result) => {
            return res.json({
                "success": true,
                "msg": "User Account Created",
                user,
            })
        })
            .catch((err) => {
                return res.json({
                    "success": false,
                    "msg": err,
                })
            })

    } catch (error) {
        return res.json({
            "status": false,
            "msg": error.message
        })
    }
}


module.exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username })

        if (!user) {
            return res.json({
                "status": false,
                "msg": "Username or Password Invalid"
            })
        }

        const valid = await bcrypt.compare(password, user.password)
        if (!valid) {
            return res.json({
                "status": false,
                "msg": "Username or Password Invalid"
            })
        }

        const token = generateToken({ id: user._id })
        res.cookie("token", token, {
            "expires": new Date(date.now() + 1 * 24 * 60 * 60 * 1000),
            "httpOnly": true
        })


        return res.json({
            "status": true,
            "msg": "Login Successful",
            user,
            token
        })


    } catch (error) {
        return res.json({
            "status": false,
            "msg": error.message
        })
    }
}