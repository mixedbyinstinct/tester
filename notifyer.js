const chokidar = require('chokidar');
const spawn = require('child_process').spawn;

const watcher = chokidar.watch('uploads', {ignored: /^\./, persistent: true});

watcher.on('add', (path) => {
    let logOut;
    console.log(path, ' has been added');
    let process = spawn('python', ['mail.py']);

    process.stdout.on('data', (data) => {
        logOut = data.toString();
    })
    process.stdout.on('end', (code) => {
        console.log(logOut);
        console.log(`python process all stdio end with code ${code}`);
    })
})