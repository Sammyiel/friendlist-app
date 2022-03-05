const express = require('express')
const router = express.Router()
const TimelyInvites = require('../models/timely.model')

// Route 1
// Add new Messages
router.post('/', async(req, res) => {
    const timelyInvite = new TimelyInvites({
        user_email: req.body.user_email,
        timely_caption: req.body.timely_caption,
        timely_sent_time: req.body.timely_sent_time,
        image_url: req.body.image_url,
        timely_expiry_time: req.body.timely_expiry_time,
        timely_likes: 0,
        timely_loves: 0,
        invitees_volume: req.body.invitees_volume,
        number_of_acceptances: 0
    })

    try {
        const newTimelyInvite = await timelyInvite.save()
        res.status(201).json({ data: newTimelyInvite, message: 'Uploaded successfully', success: true })
    } catch (error) {
        res.status(400).json({ message: 'Sorry, unexpected error occurred. Please try again later', success: false })
    }
})

// Route 2
// Getting all the Messages
router.get('/', async(req, res) => {
    try {
        const timelyInvite = await TimelyInvites.find({ message_reports: 0, user_email: 0 })
        res.status(200).json({ data: timelyInvite, message: 'Success', success: true })
    } catch (error) {
        res.status(500).json({ message: 'Sorry, unexpected error occurred. Please try again later', success: false })
    }
})

module.exports = router;