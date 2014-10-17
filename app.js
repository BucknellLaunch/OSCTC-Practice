var express = require('express');
var path = require('path');
var _ = require('underscore');
var routes = require('./src/routes');
var app = express();

// set application params
app.set('title', 'Vervecomm Inc.');
app.set('view engine', 'hbs');

// set application paths
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'src'));

// set routes
app.use('/', routes);

// listen on port 3000
app.listen(3000);

// export the app
module.exports = app;
