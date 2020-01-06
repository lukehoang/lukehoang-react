require('dotenv').config();
const express =  require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const port = process.env.PORT || 5000;

//DB config
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('connected to database'));

//accept JSON
app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => res.json({"message": "this page is returning a json message. you know"}));

//Test api
const albumsRouter = require('./routes/albums');
app.use('/albums', albumsRouter);

//Send email API


const auth = {
    type: "oauth2",
    user: 'mungleephoto@gmail.com',
    clientId: "849717276396-hlhdlrq6ds49vj7l9u78jtma8qi8jsfq.apps.googleusercontent.com",
    clientSecret: "fIvDPBi9zNt0_Xcfxz_UPYqZ",
    refreshToken: "1//043K_oOSHqTvqCgYIARAAGAQSNwF-L9IrYDBF_CtjeGFzJ79lU78CAfJmcx4b_BLo1wJkD0P1DPeNXriMV2n4r5wIrMNott1T5Oc"
}


app.post('/send', (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;

    response = {
        name: name,
        email: email,
        message: message
    }

    var mailOptions = {
        from: name,
        to: 'mungleephoto@gmail.com',
        subject: 'Lukehoang.com | New message from: ' + name,
        text: message,
        html: 'Message from: ' + name + '<br><br>Email: ' + email + '<br><br>Message: ' + message,
    };

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:auth
    });
    

    transporter.sendMail(mailOptions, (err, data) => {
        if(err){
           res.json({
               status: 'false'
           })
        }else{
            res.json({
                status: 'success'
            })
        }
    })
});

app.use(cors());

const fs = require('fs');
const path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public/images/upload/')
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name + path.extname(file.originalname))
  }
});

var upload = multer({ storage: storage }).single('file');

app.post('/upload',function(req, res) {
     
    upload(req, res, function (err) {
        
        var name = req.body.name.toLowerCase();
        name = name.replace(' ', '-');

        fs.renameSync(req.file.path, req.file.path.replace('undefined', name));

           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })

});


app.listen(port, () => console.log('server is running on port '+port));

