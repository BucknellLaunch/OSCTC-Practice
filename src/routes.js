var fs = require('fs');
var express = require('express');
var child_process = require('child_process');
var router = express.Router();

// allow client to get favicon
router.get('/favicon.ico', function(req, res) {
     console.log('getting favicon');
     res.status(200).end('./public/favicon.ico');
});

// index redirection page
router.get('/', function(req, res) {
     res.redirect('/index.html');
});

router.post('/__update', function(req, res) {
    console.log('Updating...');
    console.log(JSON.stringify(req.body.ref_type));

    var body = req.body;

    // always redeploy

    // exit the process
    child_process.spawn('./update.sh');
    process.exit(0);
});

// sends the homepage
router.get('/*', function(req, res) {
     // attempt to load the content
     console.log(req.ip + ' requesting ' + req.url);
     var content;
     try {
          // escape filesystem '../'s
          req.url=  req.url.replace(/\/\.\./, '');
          content = fs.readFileSync('../public' + req.url + '.html');
     } catch(err) {
          if (err.code !== "ENOENT") throw err;

          console.log('Error: not found');
          res.status(404).end();
     }
});

module.exports = router;
