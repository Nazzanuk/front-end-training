//server.js

var express = require('express');
var bodyParser= require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));


var pokemon = [{name:'pikachu', cp:1}];

app.listen(3000,() => console.log('listening on 3000'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    // Note: __dirname is the path to your current working directory
});

app.get('/pokemon', (req, res) => {
    res.json(pokemon);
});

app.post('/pokemon', (req, res) => {
    res.json(req.body);
});