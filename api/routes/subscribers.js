const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

//get all subscribers
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch (err) {
        res.status(500).json({message: err.message});
    } 
});

//get sub by id
router.get('/:id', getSubscriber, async (req, res) => {
    res.json(res.subscriber);
});

//create
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        channel: req.body.channel
    });

    try {
        const newSubscriber = await subscriber.save();
        res.status(200).json(newSubscriber);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

//update
router.patch('/:id', getSubscriber, async (req, res) => {
    if(req.body.name != null){
        res.subscriber.name = req.body.name;
    }
    if(req.body.channel != null){
        res.subscriber.channel = req.body.channel;
    }
    try {
        const updatedSub = await res.subscriber.save();
        res.json(updatedSub);
    } catch (err) {
        res.status(400).json({message: err.message})
    }
});

//delete
router.delete('/:id', getSubscriber, async (req, res) => { 
    try {
        await res.subscriber.remove();
        res.json({message: "sub was deleted."})
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});


//middleware
async function getSubscriber(req, res, next){
    try {
        subscriber = await Subscriber.findById(req.params.id);
        if(subscriber == null){
            return res.status(404).json({message: 'subscriber not found'});
        }
    } catch (err) {
        return res.status(500).json({message: err.message});
    }

    res.subscriber = subscriber;
    next();
}

module.exports = router;