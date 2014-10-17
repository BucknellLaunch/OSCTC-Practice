var express = require('express');
var path = require('path');
var _ = require('underscore');
var routes = require('./src/routes');
var app = express();

// set application params
app.set('title', 'Open Source Comes to Campus');

// set application paths
app.use(express.static(path.join(__dirname, 'public')));

// set routes
app.use('/', routes);

// listen on either user specified port or 3000
if (process.argv.length > 2) {
  console.log("Process started on port " + process.argv[2]);
  app.listen(process.argv[2]);
} else {
  console.log("Process started on port 3000");
  app.listen(3000);
}

// export the app
module.exports = app;
