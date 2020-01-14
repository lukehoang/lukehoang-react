const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    albumName: {
        type: String,
        required: true
    },
    imgCollection: {
        type: Array
    }
});

//export subscribers data to schema
module.exports = mongoose.model('Photo', photoSchema);

