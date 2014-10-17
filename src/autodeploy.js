var http = require('http');
var fs = require('fs');

function deploy() {
    // download the new tag from the server
    var url = 'https://github.com/BucknellLaunch/OSCTC-Practice/archive/' + body.ref + '.tar.gz';
    var file = fs.createWriteStream(body.ref + '.tar.gz');
    var request = http.get(url, function(response) {
        response.pipe(file);
    });
}

module.exports = {
    deploy: deploy
};
