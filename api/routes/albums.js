const express = require('express');
const router = express.Router();
const Album = require('../models/album');

//get all albums
router.get('/', async (req, res) => {
    try {
        const albums = await Album.find();
        res.json(albums);
    } catch (err) {
        res.status(500).json({message: err.message});
    } 
});

//get album by id
router.get('/:id', getAlbum, async (req, res) => {
    res.json(res.album);
});

//create
router.post('/', async (req, res) => {

    const album = new Album({
        name: req.body.name,
        location: req.body.location,
        path: req.body.path,
        createdDate: req.body.createdDate
    });

    try {
        const newAlbum = await album.save();
        // res.status(200).json(newAlbum);
        res.json({
            status: 'success'
        })
    } catch (err) {
        // res.status(500).json({message: err.message});
        res.json({
            status: 'false'
        })
    }
});

//update
router.patch('/:id', getAlbum, async (req, res) => {
    if(req.body.name != null){
        res.album.name = req.body.name;
    }
    if(req.body.location != null){
        res.album.location = req.body.location;
    }
    try {
        const updatedSub = await res.album.save();
        res.json(updatedSub);
    } catch (err) {
        res.status(400).json({message: err.message})
    }
});

//delete
router.delete('/:id', getAlbum, async (req, res) => { 
    try {
        await res.album.remove();
        res.json({message: "sub was deleted."})
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});


//middleware
async function getAlbum(req, res, next){
    try {
        album = await Album.findById(req.params.id);
        if(album == null){
            return res.status(404).json({message: 'album not found'});
        }
    } catch (err) {
        return res.status(500).json({message: err.message});
    }

    res.album = album;
    next();
}

module.exports = router;