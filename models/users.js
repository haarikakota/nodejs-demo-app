const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');
// const userSchema = new mongoose.Schema({});
 


const userSchema = new mongoose.Schema({
    username : {
        type: String,
        unique: [true, "enter unique string"]
    },
    password : {
        type : String,
        required: [true, "Please enter a password"]
    }
})

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);

module.exports = User;