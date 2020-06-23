const express = require('express')
const mongoose = require('mongoose')
const fetch = require('node-fetch')
const morgan = require('morgan')
const moment = require('moment')
const session = require('express-session')

//==================================================
// Configuration & Server App

require('dotenv').config()

const PORT = process.env.PORT || 3005
const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/nationalpark'
const { API_KEY } = process.env

const app = express()

//==================================================
// Middleware
app.use(
  session({
    secret: 'feedmeseymour',
    resave: false,
    saveUninitialized: false
  })
)
app.use(express.json())
app.use(express.static('public'))

//==================================================
// Controllers
const npsController = require('./controllers/npsController.js')

app.use('/nps', npsController)

const sessionController = require('./controllers/session.js')

app.use('/session', sessionController)

//==================================================
// NPS API
// Using async-await syntax to get fetch to work
app.post('/getparks', async (req, res) => {
  try {
    const { query, type, route } = req.body
    const url = `https://developer.nps.gov/api/v1/${route}?${type}${query}&api_key=${API_KEY}`
    const response = await fetch(url)
    const json = await response.json()
    res.json(json)
    console.log(url)
  } catch (error) {
    res.json(error)
  }
})

//==================================================
// Listeners
mongoose.connect(
  MONGO_URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log(`MONGO @ ${MONGO_URI}`)
  }
)

app.listen(PORT, () => {
  console.log(
    `Listening on PORT:${PORT} @ ${moment().format('MMMM Do YYYY, hh:mm:ss a')}`
  )
})
