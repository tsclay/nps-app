const express = require('express')

require('dotenv').config()

const PORT = process.env.PORT || 3005
const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/nationalpark'

const app = express()

app.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`)
})
