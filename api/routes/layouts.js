const express = require('express');
const router = express.Router();
const Layout = require('../models/layout');


//create
router.post('/create', (req, res, next) => {

    let thisAlbumId = [
        "frame1",
        "frame2",
        "frame3",
        "frame4",
        "frame5",
        "frame6",
    ];
    let thisAlbumUrl = [
        "frame1",
        "frame2",
        "frame3",
        "frame4",
        "frame5",
        "frame6",
    ];
    const layout = new Layout({
        name: req.body.name.toLowerCase(),
        albumUrl: thisAlbumUrl,
        albumId: thisAlbumId
    });

    layout.save().then(result => {
        res.status(201).json({
            message: "Done!"
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })

})

//get all layouts
router.get('/', async (req, res) => {
    try {
        const layouts = await Layout.find();
        res.json(layouts);
    } catch (err) {
        res.status(500).json({message: err.message});
    } 
});


//update
router.patch('/update/:id', getLayout, async (req, res) => {
    if(req.body.albumId != null){
        res.layout.albumId = req.body.albumId;
    }
    if(req.body.albumUrl != null){
        res.layout.albumUrl = req.body.albumUrl;
    }
    try {
        const updatedSub = await res.layout.save();
        res.json(updatedSub);
    } catch (err) {
        res.status(400).json({message: err.message})
    }
});

// //delete
// router.delete('/deleteAlbum/:albumName', async (req, res) => { 
//     try {
//         await Album.deleteMany({name : req.params.albumName.replace('-',' ').toLowerCase()});
//         console.log('deleted');
//         res.json({message: "all photos was deleted."})
//     } catch (err) {
//         console.log('failed');
//         res.status(500).json({message: err.message});
//     }
// });


//middleware
async function getLayout(req, res, next){
    try {
        layout = await Layout.findById(req.params.id);
        if(layout == null){
            return res.status(404).json({message: 'layout not found'});
        }
    } catch (err) {
        return res.status(500).json({message: err.message});
    }

    res.layout = layout;

   

    next();
}

// async function deleteAlbumByName(req, res, next){
//     try {
//         album = await Album.find({name : req.params.name});
//         if(album == null){
//             return res.status(404).json({message: 'album not found'});
//         }
//     } catch (err) {
//         return res.status(500).json({message: err.message});
//     }

//     res.album = album;
//     next();
// }

module.exports = router;