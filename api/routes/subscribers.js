const express = require('express');
const router = express.Router();


//get all subscribers
router.get('/', (req, res) => {
    res.send('hello');    
});

//get sub by id
router.get('/:id',  (req, res) => {
    
});

//create
router.post('/', (req, res) => {
    
});

//update
router.patch('/:id', (req, res) => {
    
});

//delete
router.delete('/:di', (req, res) => {
    
});

module.exports = router;