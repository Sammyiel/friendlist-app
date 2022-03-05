const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const path = require('path');

const usersRouter = require('./routes/users.route')
const messagesRouter = require('./routes/messages.route')
const TimelyInviteRouter = require('./routes/timely.route')

const app = express()

var PORT = process.env.PORT || 5000

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

db.on('error', (error) => console.log(error))

db.once('open', () => console.log('Connected to DB successfully'))

app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json())

app.use(cors())

app.use('/users', usersRouter)

app.use('/messages', messagesRouter)

app.use('/timely', TimelyInviteRouter)

app.listen(PORT, () => console.log(`App is live on port ${PORT}!`))