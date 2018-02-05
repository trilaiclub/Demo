var express = require('express');
var app = express();
var path = require('path');

// Routes
app.get('/', function(req, res) {
  res.sendfile(path.join(__dirname + '/index.html'));
});


// Routes
app.get('/demo', function(req, res) {
  res.sendfile(path.join(__dirname + '/RecoEngine_demo.mp4'));
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);