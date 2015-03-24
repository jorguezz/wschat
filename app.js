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


var nicknames = {};

io.sockets.on('connection', function(socket) {

    socket.on('user message', function(msg) {
        console.log('broadCast Ok');
        socket.broadcast.emit('user message', socket.nickname, msg);
    });

    socket.on('nickname', function(nick, fn) {
        console.log('nickname Ok');
        if (nicknames[nick]) {
            fn(true);
        } else {
            fn(false);
            nicknames[nick] = socket.nickname = nick;
            socket.broadcast.emit('announcement', 'El usuario ' + nick + ' se ha conectado');
            io.sockets.emit('nicknames', nicknames);
        }
    });

    socket.on('disconnect', function() {
        console.log('disconnect');
        if (!socket.nickname) return;

        delete nicknames[socket.nickname];
        socket.broadcast.emit('announcement', 'El usuario ' + socket.nickname + ' se ha desconectado');
        socket.broadcast.emit('nicknames', nicknames);
    });
});

/*
http.listen(3000, function() {
    console.log('listening on *:3000');
});
*/
