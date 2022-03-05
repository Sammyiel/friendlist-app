const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    user_gender: {
        type: String
    },
    date_of_birth: {
        type: String
    },
    profile_image: {
        type: String
    },
    user_followers: {
        type: String
    }
})

module.exports = mongoose.model('users', userSchema)