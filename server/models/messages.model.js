const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    user_email: {
        type: String,
        required: true
    },
    message_id: {
        type: String,
        required: true
    },
    message_text: {
        type: String,
        required: true
    },
    message_sent_time: {
        type: String,
        required: true
    },
    message_likes: {
        type: String
    },
    message_dislikes: {
        type: String
    }
})

module.exports = mongoose.model('messages', messageSchema)