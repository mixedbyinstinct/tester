const MongoClient = require('mongodb').MongoClient;
const spawn = require('child_process').spawn;
const url = 'mongodb://localhost:27018/personal-site-db';

MongoClient.connect(url, function(err, db) {
    let log;
    try {
        if(err) {
            throw err;
        }
        let watchCursor = db.getSiblingDB("personal-site-db").songs.watch();
        while(!watchCursor.isClosed) {
            let next = watchCursor.tryNext();
            while(next !== null) {
                let process = spawn('python', [mail.py]);
                process.stdout.on('data', (data) => {
                    log = data.toString();
                })
                process.stdout.on('end', () => console.log(log));
                next = watchCursor.tryNext();
            }
        }
    } catch(err) {
        console.log(err);
    }
})