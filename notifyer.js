const chokidar = require('chokidar');
const spawn = require('child_process').spawn;

const watcher = chokidar.watch('uploads', {ignored: /^\./, persistent: true});

watcher.on('add', (path) => {
    console.log(path, ' has been added');
})