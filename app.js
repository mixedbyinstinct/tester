
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const  jwt = require('jsonwebtoken');
const multer = require('multer');
const bcrypt = ('bcrypt');
const fs = require('fs');
let app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

var spawn = require('child_process').spawn;

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json(), urlencodedParser);

const url = 'mongodb://localhost:27018/personal-site-db';

const PORT = 4000;
const JWT_SECRET = "this-is-the-key";
const PASSPORTSECRET = "this-is-the-key";

function verifyJWT(req, res, next) {
    console.log('verify called');
    const token = req.headers["x-access-token"]?.split(' ')[1];
    console.log(token);
    if(token) {
        jwt.verify(token, PASSPORTSECRET, (err, decoded) => {
            if(err) return res.json({
                isLoggedIn: false,
                message: "Failed to Authenticate"
            })
            console.log(decoded);
            req.user = {};
            req.user.id = decoded.id;
            req.user.username = decoded.username;
            console.log(req.user);
            next();
        })
    }
}

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        if(file.mimetype == 'application/zip' || file.mimetype == 'audio/octet-stream' || file.mimetype == 'application/x-zip-compressed' || file.mimetype == 'multipart/x-zip') {
            cb(null, file.originalname);
        } else {
            return req.res.json({
              successfulUpload: false,
              message: 'Only .zip Files Supported By This Uploader, Try Again'
          })
        }
    }
})
var upload = multer({ storage: storage });


app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post("/register", async (req, res) => {
    const user = req.body;
    console.log(user);
    if (req.body.password.includes(/\s/)) {
        res.json({message: 'whitespace not allowed in passwords'});
    }
    const takenUsername = await User.findOne({username: user.username})
    const takenEmail = await User.findOne({email:
                                           user.email})
    if (takenUsername || takenEmail) {
        res.json({message: "Username or email has already been taken"});
        console.log('user exists');
    } else {
        user.password = await bcrypt.hash(req.body.password, 10);
        const dbUser = new User({
            username: user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            password: user.password
        })
        dbUser.save()
        res.json({message: "Success"});
        console.log('user saved');
    }
})

app.post("/login", (req, res) => {
    const userLoggingIn = req.body;
    console.log(userLoggingIn);
    User.findOne({username: userLoggingIn.username
                  .toLowerCase()})
        .then(dbUser => {
        if(!dbUser) {
            return res.json({
                message: "Nah Bruh"
            })
        }
        bcrypt.compare(userLoggingIn.password, dbUser.password)
            .then(isCorrect => {
            if(isCorrect) {
                const payload = {
                    id: dbUser._id,
                    username: dbUser.username,
                }
                console.log('payload: ' + payload);
                jwt.sign(
                    payload,
                    JWT_SECRET,
                    {expiresIn: 86400},
                    (err, token) => {
                        if(err) return res.json({
                            message: err
                        })
                        //console.log('token: ' + token);
                        return res.json({
                            message: "Ayeeee",
                            token: "Bearer " + token,
                        })
                    }
                )
            } else {
                return res.json({
                    message: "Nah Bruh Try Again"
                })
            }
        })
    })
});

app.get("/isUserAuth", verifyJWT, (req, res) => {
    console.log('auth route called');
    res.json({isLoggedIn: true, username: req.user
              .username});
})

app.post("/uploadsong",upload.single('mySong'),(req,res)=>{
    var song = fs.readFileSync(req.file.path);
    var userName = req.headers["current-user-name"];
    if(!userName) {
        res.json({
            successfulUpload: false,
            message: 'Name Required'
        });
    }
    var encode_song = song.toString('base64');
    var final_song = {
        title:req.file.originalname,
        user: userName,
        contentType:req.file.mimetype,
        img:new Buffer.from(encode_song)
    };
    songModel.create(final_song,function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log(result.img.Buffer);
            console.log("Saved To database");
            res.contentType(final_song.contentType
                           );
            console.log(final_song.contentType);
            res.json({
                successfulUpload: true,
                message: 'Upload Successful!'
            });
        }
    })
})

app.post("/findsongs", (req, res) => {
    MongoClient.connect(url, async function(err, db) {

        if(err) return res.json({
            searchSucceeded: false,
            message: err
        });
        let dbo = db.db('personal-site-db');
        let songArray = await dbo.collection("songs").find().toArray();
        console.log(songArray);

        res.json({
            searchSucceeded: true,
            songs: songArray
        });
        db.close();
    })
})

app.get("/table", (req, res) => {
    MongoClient.connect(url, async function(err, db) {

        if(err) console.log(err);

        let dbo = db.db('personal-site-db');
        let table = await dbo.collection("table").find()
       .toArray();
        console.log(table);

        res.send(table);

        db.close();
    })


})


app.get("/reversename", (req, res) => {
    //console.log(req.body);
    let test;
    let userName = req.headers["current-user-name"];
    const process = spawn('python', ['pyTest.py', userName]);

    process.stdout.on('data', (data) => {
        test = data.toString();

    });

    process.stdout.on('end', function() {
        res.json({ message: test });
    });
});

app.get("/quote", (req, res) => {
    let test;
    let number = req.headers["number-of-songs"];
    const process = spawn('python', ['quoter.py', number]);

    process.stdout.on('data', (data) => {
        test = data.toString();
    });

    process.stdout.on('end', function() {
        console.log(test);
        res.json({ message: '$' + test });
    });
})


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then((res) => {
    app.listen(PORT, () => console.log('server started at port ' + PORT));
}).catch(err => console.log(err));

