const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan');
const moment = require('moment');



require('dotenv').config()

const PORT = process.env.PORT || 3005
const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/nationalpark'

const app = express()

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
    `Listening on PORT:${PORT}`
    @,
    moment().format('MMMM Do YYYY, hh:mm:ss a')
  );
})
