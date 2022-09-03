const url = 'mongodb://localhost:27018/personal-site-db'

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, function(err, db) {
    try {
        if (err) throw err;
        let dbo = db.db('personal-site-db');
        dbo.collection("table").insertOne({name: 'Tootie Raww', activity: 'Both'});
        dbo.collection("table").insertOne({name: 'Boosie', activity: 'Both'});
        dbo.collection("table").insertOne({name: 'Lil Keed', activity: 'Recorded'});  dbo.collection("table").insertOne({name: 'Calboy', activity: 'Mixed'});
        dbo.collection("table").insertOne({name: 'Slimelife Shawty', activity: 'Recorded'});
        console.log('inserted');
        setTimeout(() =>  {   dbo.collection("table").find().toArray(function(err, result) {
                if(err) throw err;
                console.log(result);
            })
        }, 500);
    } catch(err) {
        console.log(err);
    }
})