const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');
const User = require('../models/user');


//Create user
router.post('/register',  async (req, res) => {


    const username = req.body.username;
    const password = req.body.password;

    try {

      const salt = await bcrypt.genSalt(10);
      const newPassword = await bcrypt.hash(password, salt);

      const user = new User({
        username : username,
        password : newPassword
      });


      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        process.env.SECRET_STRING,{
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
router.post('/login' 
  // ,[
  //   check("password", "Please enter a valid password").isLength({
  //     min: 6
  //   })
  // ]
  , async (req, res) => {

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
        process.env.SECRET_STRING,
        {
          expiresIn: 3600
        },
        (err, token) => {
          if(err) throw err;
          res.status(200).json({
            token: token
          });
        }
      );

    } catch (err) {
      console.error(err);
      res.status(500).send("server error");
    }
});

//Session User
router.get('/pass', auth, async (req, res) => {
  try{
    // request.user is getting fetched from Middleware after token authentication
    const user = await User.findById(req.user.id);
    res.status(200).json(user);
  }catch(err){
    console.log(err);
    res.status(500).send("Error in fetching user");
  }
});

function auth(req, res, next){
  const token =  req.header('token');
  
  if(!token){
    return res.status(401).json({
      message: "Auth Error"
    });
  }

  try {
    const decoded = jwt.verify(token, 'secret');
    req.user = decoded.user;
    next();
  } catch (err) {
    console.log(err);
    res.status(500).send("invalid token");
  }
}

module.exports = router;
