const express = require('express');
const router = express.Router();
const multer = require('multer');
// const mongoose = require('mongoose');
// const uuidv4 = require('uuid/v4');
const fs = require('fs');
const path = require('path');
const Album = require('../models/album');
const tinify = require("tinify");
tinify.key = "V4ZnwVFbyYq8HJ9xjcmCdD8rS4RDDxtl";

const DIR = './public/images/upload/temp/';




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/upload/temp/');
    },
    filename: function (req, file, cb) {
        cb(null, req.body.name + path.extname(file.originalname));
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
router.post('/upload', upload.single('file'), (req, res, next) => {

    //rename input param:name, replace 'space' with '-'
    let name = req.body.name.toLowerCase();
    name = name.split(' ').join('-');

    fs.renameSync(req.file.path, req.file.path.replace('undefined', name));

    let mongoPath = "https://api.lukemhoang.com/"+req.file.path;
    mongoPath = mongoPath.replace('undefined', name);
    mongoPath = mongoPath.replace('temp', name);
    
    const album = new Album({
        name: req.body.name.toLowerCase(),
        location: req.body.location,
        path: mongoPath,
        caption: req.body.caption,
        createdDate: req.body.createdDate
    });

    album.save().then(result => {
        res.status(201).json({
            message: "Done upload!"
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })

    //Move and compress files processes.

    //init
    const dir = 'public/images/upload/'+name+'/';
    const dirNeedToEmpty = 'public/images/upload/temp/';

    //create album folder if not existed
    
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    //loop through images=
        
    //init
    let oldPath = req.file.path.replace('undefined', name);
    let newPath = oldPath.replace('temp', name);

    console.log(oldPath);
    console.log(newPath);


    //move files
    var source = fs.createReadStream(oldPath);
    var dest = fs.createWriteStream(newPath);

    source.pipe(dest);
    source.on('end', function() {
        console.log('moved');
        //compress file
        try {
            let sourceTini = tinify.fromFile(newPath);
            sourceTini.toFile(newPath);
            console.log('compressed');
        } catch (error) {
            console.log('file is too large, max is 5MB');
        }
        
    });
    source.on('error', function(err) { 
        console.log(err);
    })


    setTimeout(function () {
        //empty temp folder
        fs.readdir(dirNeedToEmpty, (err, files) => {

            if (err) throw err;
        
            for (const file of files) {
            fs.unlink(path.join(dirNeedToEmpty, file), err => {
                if (err) throw err;
            });
            }

            console.log('empty Temp');
        });
    }, 2000)
    

})

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
router.get('/:albumName', getAlbumByName, async (req, res) => {
    res.json(res.album);
});


//update
router.patch('/update/:id', getAlbum, async (req, res) => {

    if(req.body.name != null && req.body.name != res.album.name){

        let oldName = res.album.name.toLowerCase();
        oldName = oldName.split(' ').join('-');

        let newName = req.body.name.toLowerCase();
        newName = newName.split(' ').join('-');
            
        const createNewDir = 'public/images/upload/'+newName+'/';
        const dirToDelete = 'public/images/upload/'+oldName+'/';

        function walkSync(dir) {
            if (!fs.lstatSync(dir).isDirectory()) return dir;
        
            return fs.readdirSync(dir).map(f => walkSync(path.join(dir, f))); // `join("\n")`
        }

        var photosList = walkSync(dirToDelete);

        console.log(photosList);
          
        if (!fs.existsSync(createNewDir)){
            fs.mkdirSync(createNewDir);
        }

        let oldDir = req.body.path.replace('https://api.lukemhoang.com/', '');
        let newDir = oldDir.replace('/'+oldName+'/','/'+newName+'/');
        let newPath = newDir.replace('/'+oldName+'.','/'+newName+'.');

        console.log(oldDir);
        console.log(newDir);
        console.log(newPath);

        //move files

        photosList.forEach(file => {
            try {
                fs.renameSync(file, file.replace('/'+oldName+'/','/'+newName+'/'));
                console.log('moved ' + file + ' to ' + file.replace('/'+oldName+'/','/'+newName+'/'));
            } catch (err) {
                console.error(err)
            }
        });

        try {
            fs.renameSync(newDir,newPath)
            console.log('renamed file');
        } catch (err) {
            console.error(err)
        }

        fs.rmdir(dirToDelete, function(err) {
            if (err) {
              throw err
            } else {
              console.log("Successfully removed the empty directory!")
            }
          })
        
        res.album.name = req.body.name;
        res.album.path = req.body.path.split(oldName).join(newName);
        
    }
    if(req.body.location != null){
        res.album.location = req.body.location;
    }
    if(req.body.caption != null){
        res.album.caption = req.body.caption;
    }
    if(req.body.createdDate != null){
        res.album.createdDate = req.body.createdDate;
    }
    try {
        const updatedSub = await res.album.save();
        res.json(updatedSub);
    } catch (err) {
        res.status(400).json({message: err.message})
    }
});

//delete
router.delete('/deleteAlbum/:albumName', async (req, res) => { 
    try {
        await Album.deleteMany({name : req.params.albumName.replace('-',' ').toLowerCase()});
        console.log('deleted');
        res.json({message: "all photos was deleted."})
    } catch (err) {
        console.log('failed');
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

async function getAlbumByName(req, res, next){
    try {
        album = await Album.find({name : req.params.albumName.split('-').join(' ').toLowerCase()});
        if(album == null){
            return res.status(404).json({message: 'album not found'});
        }
    } catch (err) {
        return res.status(500).json({message: err.message});
    }

    res.album = album;
    console.log(album);
    next();
}

module.exports = router;