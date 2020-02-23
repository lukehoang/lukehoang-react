require('dotenv').config();
const express =  require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.static('public'));
app.use(cookieParser());
//Serves all the request which includes /images in the url from Images folder
app.use('/public/images/upload', express.static(__dirname + '/public/images/upload'));

//DB config
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('connected to database'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.get('/', (req, res) => res.json({"message": "this page is returning a json message. you know"}));

//Test api
const albumsRouter = require('./routes/albums');
app.use('/albums', albumsRouter);
app.use('/albums/upload', albumsRouter);

const photosRouter = require('./routes/photos');
app.use('/photos', photosRouter);
app.use('/photos/upload-photos', photosRouter);

const userRouter = require('./routes/users');
app.use('/users', userRouter);
app.use('/users/login', userRouter);

//Send email API
const auth = {
    type: process.env.EMAIL_AUTH_TYPE,
    user: process.env.EMAIL_AUTH_USER,
    clientId: process.env.EMAIL_CLIENT_ID,
    clientSecret: process.env.EMAIL_CLIENT_SECRET,
    refreshToken: process.env.EMAIL_CLIENT_REFRESH_TOKEN
}


app.post('/send', (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    if(req.body.message != null){
        var domain =  req.body.domain;
    }else{
        var domain = 'lukehoang.com';
    }

    response = {
        name: name,
        email: email,
        message: message
    }

    var mailOptions = {
        from: name,
        to: 'mungleephoto@gmail.com',
        subject: domain+' | New message from: ' + name,
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




app.listen(port, () => console.log('server is running on port '+port));

