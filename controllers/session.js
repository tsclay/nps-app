const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/npsModel.js');

router.post('/', (req, res) => {
  User.findOne({username: req.body.username}, (error, foundUser) => {
    if (foundUser === null) {
      res.json({
        message: 'user not found'
      })
    } else {
      const doesPasswordMatch = bcrypt.compareSync(req.body.password, foundUser.password);
      if (doesPasswordMatch) {
        req.session.user = foundUser;
        res.json(foundUser);
      } else {
        res.json({
          message: 'user not found'
        })
      }
    }
  })
});

router.get('/', (req res) => {
  res.json(req.session.user);
})

router.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.json({
      destroyed: true
    })
  })
});

module.exports = router;
