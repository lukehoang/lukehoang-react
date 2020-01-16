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

    const albumName = req.body.albumName.toLowerCase();
    const reqFiles = [];
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push('https://api.lukemhoang.com/public/images/upload/'+albumName+'/' + req.files[i].filename)
    }

    const photo = new Photo({
        _id: new mongoose.Types.ObjectId(),
        albumName: req.body.albumName.toLowerCase(),
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

    // Move and compress files processes.

    //init
    const dir = 'public/images/upload/'+albumName+'/';
    const dirNeedToEmpty = 'public/images/upload/temp/';

    //create album folder if not existed
    
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    //loop through images
    for(let i = 0; i<reqFiles.length; i++){
        
        //init
        let oldPath = reqFiles[i].replace(albumName, 'temp');
        oldPath = oldPath.replace('https://api.lukemhoang.com/','');
        let newPath = reqFiles[i];
        newPath = newPath.replace('https://api.lukemhoang.com/','');

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

       
        
    };

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
        const photos = await Photo.find();
        res.json(photos);
    } catch (err) {
        res.status(500).json({message: err.message});
    } 
});

//get album by id
router.get('/:albumName', getPhotoByName, async (req, res) => {
    res.json(res.photo);
});


//update
router.patch('/deleteOnePhoto/:id/:url', getPhotoById, async (req, res) => {

    let albumName = res.photo.albumName;
    let path = decodeURI(req.params.url).replace('https://api.lukemhoang.com/','');

    res.photo.imgCollection.splice(res.photo.imgCollection.indexOf(req.params.url), 1);
    

    try {
        fs.unlinkSync(path)
        console.log('removed file from disk');
    } catch(err) {
        console.error(err)
    }

    try {
        const updatedSub = await res.photo.save();
        console.log('updated');
        res.json(updatedSub);


    } catch (err) {
        res.status(400).json({message: err.message})
    }


});

//delete
router.delete('/deleteAllPhotos/:albumName', getPhotoByName, async (req, res) => {
    
    let myAlbums = res.photo;
    let photos = [];
    myAlbums.forEach(album => {
        let collections = album.imgCollection;
        collections.forEach(collection => {
            photos.push(collection);
        });
    });

    photos.forEach(thisPhoto => {
        let path = thisPhoto.replace('https://api.lukemhoang.com/','');
        try {
            fs.unlinkSync(path)
            console.log('removed '+path+' from disk');
        } catch(err) {
            console.error(err)
        }
    });

    try {
        await Photo.deleteMany({albumName : req.params.albumName});
        console.log('deleted');
        res.json({message: "all photos was deleted."})
    } catch (err) {
        console.log('failed');
        res.status(500).json({message: err.message});
    }
});


//delete the album files
router.delete('/deleteAlbum/:albumName', getPhotoByName, async (req, res) => {
    
    let myAlbums = res.photo;
    let photos = [];
    myAlbums.forEach(album => {
        let collections = album.imgCollection;
        collections.forEach(collection => {
            photos.push(collection);
        });
    });

    photos.forEach(thisPhoto => {
        let path = thisPhoto.replace('https://api.lukemhoang.com/','');
        try {
            fs.unlinkSync(path)
            console.log('removed '+path+' from disk');
        } catch(err) {
            console.error(err)
        }
    });


    let thisDir = 'public/images/upload/'+req.params.albumName+'/';

    setTimeout(function () {
        //empty temp folder
        fs.readdir(thisDir, (err, files) => {

            if (err) throw err;
        
            for (const file of files) {
            fs.unlink(path.join(thisDir, file), err => {
                if (err) throw err;
            });
            }

            console.log('empty Temp');
        });
    }, 2000)

    try {
        await Photo.deleteMany({albumName : req.params.albumName});
        console.log('deleted');
        res.json({message: "all photos was deleted."})
    } catch (err) {
        console.log('failed');
        res.status(500).json({message: err.message});
    }
});


//middleware
async function getPhotoById(req, res, next){
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

async function getPhotoByName(req, res, next){

    let albumName = req.params.albumName;
    console.log(albumName);

    let query = {albumName: req.params.albumName};

    try {
        photo = await Photo.find(query);
        if(photo == null){
            return res.status(404).json({message: 'photo not found'});
        }
    } catch (err) {
        return res.status(500).json({message: err.message});
    }

    res.photo = photo;
    next();
}


module.exports = router;