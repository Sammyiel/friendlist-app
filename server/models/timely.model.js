const mongoose = require('mongoose')

const timelyInvitesSchema = new mongoose.Schema({
    user_email: {
        type: String,
        required: true
    },
    timely_caption: {
        type: String
    },
    timely_sent_time: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    timely_expiry_time: {
        type: String
    },
    timely_likes: {
        type: String
    },
    timely_loves: {
        type: String
    },
    invitees_volume: {
        type: String
    },
    number_of_acceptances: {
        type: String
    }
})

module.exports = mongoose.model('timelyInvites', timelyInvitesSchema)