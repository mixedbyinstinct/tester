const MongoClient = require('mongodb').MongoClient;
const spawn = require('child_process').spawn;
const url = 'mongodb://localhost:27018/personal-site-db';

const client = new MongoClient(url);

let changeStream;
async function run() {
    try {
        const database = client.db('personal-site-db');
        const collection = database.collection("songs");
       
        changeStream = collection.watch();
        
        changeStream.on("change", next => {
            let log;
            let process = spawn('python', ['mail.py']);
            process.stdout.on('data', (data) => {
                log = data.toString();
            })
            process.stdout.on('end', () => console.log(data));
        })
        await changeStream.close();
    } finally {
        await client.close();
    }
}
run().catch(console.dir);