const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const saltRound = 10;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


//export subscribers data to schema
module.exports = mongoose.model('User', userSchema);

