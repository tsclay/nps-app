const express = require('express')
const bcrypt = require('bcrypt')

const npsUser = express.Router()

const User = require('../models/npsModel.js')

// Create a new user account
npsUser.post('/', async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  try {
    const newUser = await User.create(req.body)
    console.log(newUser)
    res.status(200).json(newUser)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Add a park to user favorites
npsUser.post('/:id/addPark', async (req, res) => {
  try {
    const findUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $push: { favoriteParks: req.body }
      },
      { new: true }
    )
    res.status(200).json(findUser)
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

// Fetch user's favorite parks when requesting Favorites page
npsUser.get('/:id/getParks', async (req, res) => {
  try {
    const findUser = await User.findById(req.params.id)
    res.status(200).json(findUser.favoriteParks)
  } catch (error) {
    res.status(400).jason({ error: error.message })
  }
})

// Update user info in Account
npsUser.put('/:id', async (req, res) => {
  if (req.body.password !== undefined) {
    req.body.password = bcrypt.hashSync(
      req.body.password,
      bcrypt.genSaltSync(10)
    )
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

// Delete park from favorites
npsUser.delete('/:id/:parkId', async (req, res) => {
  try {
    const deleteThis = await User.findByIdAndUpdate(
      req.params.id,
      { $pull: { favoriteParks: { parkId: req.params.parkId } } },
      { new: true }
    )
    res.status(200).json(deleteThis)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Delete user account
npsUser.delete('/:id', async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndRemove(req.params.id)
    res.status(200).json(deleteUser)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = npsUser
