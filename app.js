/*var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/src'));

app.get('/', function(req, res) {
    res.sendFile('src/index.html');
});

*/
/* Socket */
var io = require('socket.io')(3000);

require('./services/chat')(io);



/*
http.listen(3000, function() {
    console.log('listening on *:3000');
});
*/
