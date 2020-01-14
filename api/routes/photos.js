const express = require('express');
const router = express.Router();
const multer = require('multer');
const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const Photo = require('../models/photo');
const fs = require('fs');
const path = require('path');

const tinify = require("tinify");
tinify.key = "V4ZnwVFbyYq8HJ9xjcmCdD8rS4RDDxtl";

const DIR = './public/images/upload/temp/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = path.extname(file.originalname);
        cb(null, uuidv4() + fileName)
    }
});

var upload = multer({
    storage: storage,
    limits: { fileSize: 8 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


//create
router.post('/upload-photos', upload.array('imgCollection', 30), (req, res, next) => {

    const albumName = req.body.albumName;
    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/public/images/upload/'+albumName+'/' + req.files[i].filename)
    }

    const photo = new Photo({
        _id: new mongoose.Types.ObjectId(),
        albumName: req.body.albumName,
        imgCollection: reqFiles
    });

     photo.save().then(result => {
        res.status(201).json({
            message: "Done upload!",
            imagesCreated: {
                _id: result._id,
                albumName: result.albumName,
                imgCollection: result.imgCollection
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })

    //compress files, then move to album's directory
})

//get all albums
router.get('/', async (req, res) => {
    try {
        const photos = await Photo.find();
        res.json(photos);
    } catch (err) {
        res.status(500).json({message: err.message});
    } 
});

//get album by id
router.get('/:id', getPhoto, async (req, res) => {
    res.json(res.photo);
});


// //update
// router.patch('/:id', getAlbum, async (req, res) => {
//     if(req.body.name != null){
//         res.album.name = req.body.name;
//     }
//     if(req.body.location != null){
//         res.album.location = req.body.location;
//     }
//     try {
//         const updatedSub = await res.album.save();
//         res.json(updatedSub);
//     } catch (err) {
//         res.status(400).json({message: err.message})
//     }
// });

// //delete
// router.delete('/:id', getAlbum, async (req, res) => { 
//     try {
//         await res.album.remove();
//         res.json({message: "sub was deleted."})
//     } catch (err) {
//         res.status(500).json({message: err.message});
//     }
// });


//middleware
async function getPhoto(req, res, next){
    try {
        photo = await Photo.findById(req.params.id);
        if(photo == null){
            return res.status(404).json({message: 'album not found'});
        }
    } catch (err) {
        return res.status(500).json({message: err.message});
    }

    res.photo = photo;
    next();
}

module.exports = router;