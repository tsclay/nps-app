const express = require('express');
const npsUser = express.Router();

const User = require('../models/npsModel.js');

npsUser.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.status(200).json(newUser)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

npsUser.get('/', async (req, res) => {
  try {
    const npsUser = await User.find()
    res.status(200).json(npsUser)
  } catch (error) {
    res.status(400.json({error: error.message}))
  }
});

npsUser.put('/:id', async () => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updateUser)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

npsUser.delete('/:id', async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndRemove(req.params.id)
    res.status(200).json(deleteUser)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

module.exports = movies
