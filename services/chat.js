module.exports = function(io) {

    var nicknames = {};

    io.sockets.on('connection', function(socket) {

        // BroadCast message
        socket.on('user message', function(msg) {
            console.log('broadCast Ok');
            socket.broadcast.emit('user message', socket.nickname, msg);
        });


        // Set nickname value
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

        // user disconnect
        socket.on('disconnect', function() {
            console.log('disconnect');
            if (!socket.nickname) return;

            delete nicknames[socket.nickname];
            socket.broadcast.emit('announcement', 'El usuario ' + socket.nickname + ' se ha desconectado');
            socket.broadcast.emit('nicknames', nicknames);
        });

    });
}
