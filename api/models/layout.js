const mongoose = require('mongoose');

const layoutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    albumId: {
        type: Array
    },
    albumUrl: {
        type: Array
    }
});

//export subscribers data to schema
module.exports = mongoose.model('Layout', layoutSchema);

