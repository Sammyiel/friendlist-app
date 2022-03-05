const express = require('express')
const router = express.Router()
const Messages = require('../models/messages.model')

// Get Messages via unique identifier middleware (Using params)
async function getMessagesByParam(req, res, next) {
    let message
    try {
        message = await Messages.find({ message_id: req.params.message_id }, { user_email: 0 }).limit(1)

        if (message.length < 1) {
            return res.status(404).json({ message: 'Resource not found', success: false })
        }

    } catch (error) {
        res.status(500).json({ message: 'Sorry, unexpected error occurred. Please try again later', success: false })
    }

    res.message = message
    next()
}

// Get Messages via unique identifier middleware (Using body inputs)
async function getMessagesByBodyInputs(req, res, next) {
    let message
    try {
        var pattern = req.params.search_query

        message = await Messages.find({ message_text: { $regex: pattern, $options: 'i' } }, { user_email: 0 })

        if (message.length < 1) {
            return res.status(404).json({ message: 'No resources match your search', success: false })
        }

    } catch (error) {
        res.status(500).json({ message: 'Sorry, unexpected error occurred. Please try again later', success: false })
    }

    res.message = message
    next()
}

// Get specific Messages for deleting
async function getOneMessagesByParam(req, res, next) {
    let message
    try {
        message = await Messages.findOne({ message_id: req.params.message_id }, { user_email: 0 }).limit(1)

        if (message === null) {
            return res.status(404).json({ message: 'Resource not found', success: false })
        }

    } catch (error) {
        res.status(500).json({ message: 'Sorry, unexpected error occurred. Please try again later', success: false })
    }

    res.message = message
    next()
}

// Route 1
// Add new Messages
router.post('/', async(req, res) => {
    const addedMessage = new Messages({
        user_email: req.body.user_email,
        message_text: req.body.message_text,
        message_sent_time: req.body.message_sent_time,
        message_likes: 0,
        message_dislikes: 0
    })

    try {
        const newMessage = await addedMessage.save()
        res.status(201).json({ data: newMessage, message: 'Uploaded successfully', success: true })
    } catch (error) {
        res.status(400).json({ message: 'Sorry, unexpected error occurred. Please try again later', success: false })
    }
})

// Route 2
// Getting all the Messages
router.get('/', async(req, res) => {
    let escape_messages = req.body.escape_messsages
    try {
        const messages = await Messages.find({ _id: { $ne: escape_messages } }, { message_reports: 0, user_email: 0 })
        res.status(200).json({ data: messages, message: 'Success', success: true })
    } catch (error) {
        res.status(500).json({ message: 'Sorry, unexpected error occurred. Please try again later', success: false })
    }
})

// Route 3
// Get a specific message
router.get('/:message_id', getMessagesByParam, async(req, res) => {
    res.status(200).json({ data: res.message, message: 'Success', success: true })
})


// Route 4
// delete a message
router.delete('/:message_id', getOneMessagesByParam, async(req, res) => {
    try {
        await res.message.remove()
        res.json({ message: 'Deleted successfully', success: true })
    } catch (error) {
        res.status(500).json({ message: "Sorry, unexpected error occurred. Please try again later", success: false })
    }
})

module.exports = router