const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');
const User = require('../models/user');

const secret = "mysecretsshhh";

//Create user
router.post('/register', [
    check("username", "Please Enter a Valid Username")
    .not()
    .isEmpty(),
    check("password", "Please enter a valid password").isLength({
        min: 6
    })
  ], async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const {
      username,
      password
    } = req.body;

    try {

      let user = await User.findOne({
        username
      });
      if(user){
        return res.status(400).send('Username already taken.');
      }

      user = new User({
        username,
        password
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        'randomString',{
          expiresIn: 10000
        },
        (err, token) => {
          if(err) throw err;
          res.status(200).json({
            token
          });
        }
      );
      
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Error in Saving');
    }

});


//authenticate
router.post('/login', [
    check("password", "Please enter a valid password").isLength({
      min: 6
    })
  ], async (req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array()
      })
    }

    const { username, password } = req.body;
    
    try {
      let user = await User.findOne({
        username
      });
      if(!user){
        return res.status(400).send('user is not found');
      }


      const isMatch = await bcrypt.compare(password, user.password);

      if(!isMatch){
        return res.status(400).send('Incorrect password');
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        "secret",
        {
          expiresIn: 3600
        },
        (err, token) => {
          if(err) throw err;
          res.status(200).json({
            token
          });
        }
      );

    } catch (err) {
      console.error(err);
      res.status(500).send("server error");
    }
});



//authenticate user
router.post('/authenticate', /*withAuth,*/ function(req, res) {
  console.log(req.body.username);
  res.send('The password is potato');
});

router.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
});

//middleware

function withAuth(req, res, next) {
  console.log('inside withAuth');
  const token = req.cookies.token;
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.username = decoded.username;
        next();
      }
    });
  }
}

module.exports = router;
