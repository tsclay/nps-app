const express = require('express')
const bcrypt = require('bcrypt')

const npsUser = express.Router()

const User = require('../models/npsModel.js')

npsUser.post('/', async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  try {
    const newUser = await User.create(req.body)
    console.log(newUser);
    res.status(200).json(newUser)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

npsUser.get('/', async (req, res) => {
  try {
    const foundUser = await User.find()
    res.status(200).json(foundUser)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

npsUser.put('/:id', async (req, res) => {
  if (req.body.password !== undefined) {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  }
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(updateUser)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

npsUser.delete('/:id', async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndRemove(req.params.id)
    res.status(200).json(deleteUser)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = npsUser
