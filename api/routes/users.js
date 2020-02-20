var express = require('express');
var router = express.Router();
// const mongoose = require('mongoose');
const User = require('../models/user');

//Create user
router.post('/register', (req, res) => {
    const user = new User({
      username: req.body.username,
      password: req.body.password
    })

    user.save().then(result => {
      res.status(200).send('Done!');
    }).catch(err => {
      console.log(err),
      res.status(500).send('Error: '+err);
    });
});


module.exports = router;
