const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    path:{
        type: String
    },
    caption:{
        type: String
    },
    createdDate: {
        type: String
    }
    
});

//export subscribers data to schema
module.exports = mongoose.model('Album', albumSchema);

