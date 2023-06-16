const User = require("../Models/UserModel")
const bcrypt = require("bcrypt")



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
                "msg": "User account Created",
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


modues.exports.login = async(req, res) =>{
try{
    const { username, password} = req.body;
    const user = await User.findOne({username})

if(!user){
    return res.json({
        "status": false,
        "msg": "Username or Password Invalid"
    })
}



} catch (error) {
    return res.json({
        "status": false,
        "msg": error.message
    })
}
}