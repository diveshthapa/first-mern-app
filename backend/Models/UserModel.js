const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        minLength: 3,
        required: true
    },
    lname: {
        type: String,
        minLength: 3,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        minLength: 8,
        required: true,

    },

    type: {
        type: String,
        default: "user"
    },
    priflePic: {
        type: String,
        default: "https://www.bing.com/images/search?view=detailV2&ccid=eGHa3HgH&id=B58987562EABE18556108F1BE5D0197B0ADBA6BA&thid=OIP.eGHa3HgHxIlTHmcvKNDs7AHaGe&mediaurl=https%3a%2f%2fwww.pngitem.com%2fpimgs%2fm%2f150-1503945_transparent-user-png-default-user-image-png-png.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.7861dadc7807c489531e672f28d0ecec%3frik%3duqbbCnsZ0OUbjw%26pid%3dImgRaw%26r%3d0&exph=752&expw=860&q=default+user&simid=608016899739446115&FORM=IRPRST&ck=65C21D68D02D5D43B020FB12EED14302&selectedIndex=11&ajaxhist=0&ajaxserp=0"
    }
})

module.exports = mongoose.model("user", userSchema)