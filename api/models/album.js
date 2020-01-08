const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    path:{
        type: String
    },
    createdDate: {
        type: String,
        required: true
    }
    
});

//export subscribers data to schema
module.exports = mongoose.model('Album', albumSchema);

