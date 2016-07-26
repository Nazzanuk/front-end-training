//server.js

var express = require('express');
var app = express();

app.listen(3000, function() {
    console.log('listening on 3000');
});

app.get('/', function(req, res) { //req = request, res = response
    res.send('Hello Browser');
});