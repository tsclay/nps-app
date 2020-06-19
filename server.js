const express = require('express')
const mongoose = require('mongoose')
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
app.use(express.json())
app.use(express.static('public'))

//==================================================
// Listeners
mongoose.connect(
  MONGO_URI,
  {
    useCreateIndex: false,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log(`MONGO @ ${MONGO_URI}`)
  }
)

app.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`)
})
