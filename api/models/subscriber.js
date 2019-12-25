const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    channel: {
        type: String,
        required: true
    },
    subDate: {
        type: Date,
        required: true,
        default: Date.now
    }
    
});

//export subscribers data to schema
module.exports = mongoose.model('Subscriber', subscriberSchema);