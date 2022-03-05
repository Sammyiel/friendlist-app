const express = require('express')
const router = express.Router()
const User = require('../models/users.model')

// Get users via unique identifier middleware (Using params)
async function getUserByParam(req, res, next) {
    let user
    try {
        user = await User.find({ user_email: req.params.user_email }, { password: 0 })

        if (user.length < 1) {
            return res.status(404).json({ message: 'User with the specified email does not exist', success: false })
        }
    } catch (error) {
        res.status(500).json({ message: 'Sorry, unexpected error occurred. Please try again later', success: false })
    }

    res.user = user
    next()
}

// Get users via unique identifier middleware (Using body inputs)
async function getUserByBodyInputs(req, res, next) {
    let user
    try {
        user = await User.find({ user_email: req.body.user_email }, { password: 0 })

        if (user.length < 1) {
            return res.status(404).json({ message: 'User with the specified email does not exist', success: false })
        }
    } catch (error) {
        res.status(500).json({ message: 'Sorry, unexpected error occurred. Please try again later', success: false })
    }

    res.user = user
    next()
}

// Check if user exists before sign up middleware (Using body inputs)
async function checkIfUserExists(req, res, next) {
    let user
    try {
        user = await User.find({ user_email: req.body.user_email }, { password: 0 })
        if (user.length > 0) {
            return res.status(400).json({ message: 'User with the specified email already exists', success: false })
        }
    } catch (error) {
        res.status(500).json({ message: 'Sorry, unexpected error occurred. Please try again later', success: false })
    }

    res.user = user
    next()
}

// Check one user for delete
async function getOneUserByParam(req, res, next) {
    let user
    try {
        user = await User.findOne({ user_email: req.params.user_email }, { password: 0 })

        if (user === null) {
            return res.status(404).json({ message: 'User with the specified email does not exist', success: false })
        }
    } catch (error) {
        res.status(500).json({ message: 'Sorry, unexpected error occurred. Please try again later', success: false })
    }

    res.user = user
    next()
}

// Route 1
// Create a user
router.post('/', checkIfUserExists, async(req, res) => {
    const joiningUser = new User({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        password: req.body.password,
        user_gender: req.body.user_gender,
        date_of_birth: req.body.date_of_birth,
        profile_image: req.body.profile_image,
        user_followers: req.body.user_followers
    })

    try {
        const newUser = await joiningUser.save()
        res.status(201).json({ data: newUser, message: 'Registered successfully', success: true })
    } catch (error) {
        res.status(400).json({ message: `Sorry, unexpected error occurred. Please try again later`, success: false })
    }
})

// Route 2
// Getting all users
router.get('/', async(req, res) => {
    try {
        const users = await User.find({}, { password: 0 })
        res.status(200).json({ data: users, message: 'Success', success: true })
    } catch (error) {
        res.status(500).json({ message: 'Sorry, unexpected error occurred. Please try again later', success: false })
    }
})

// Route 3
// Getting one user
router.get('/:user_email', getUserByParam, async(req, res) => {
    res.status(200).json({ data: res.user, message: 'Success', success: true })
})

// Route 4
// updating user
router.patch('/', getUserByBodyInputs, async(req, res) => {
    if (req.body.user_name !== null) {
        res.user.user_name = req.body.user_name
    }
    if (req.body.channel_name !== null) {
        res.user.channel_name = req.body.channel_name
    }
    if (req.body.profile_image !== null) {
        res.user.profile_image = req.body.profile_image
    }

    try {
        const updatedUser = await res.user.save()
        res.status(200).json({ data: updatedUser, message: 'Success', success: true })
    } catch (error) {
        res.status(400).json({ message: 'Sorry, unexpected error occurred. Please try again later', success: false })
    }
})

// Route 5
// delete a user
router.delete('/:user_email', getOneUserByParam, async(req, res) => {
    try {
        await res.user.remove()
        res.json({ message: 'Deleted successfully', success: true })
    } catch (error) {
        res.status(500).json({ message: "Sorry, unexpected error occurred. Please try again later", success: false })
    }
})

module.exports = router
