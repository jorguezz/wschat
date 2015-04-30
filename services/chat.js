var _ = require('underscore');

module.exports = function(io) {

    var users = [];

    io.sockets.on('connection', function(socket) {

        // BroadCast message
        socket.on('user:message', function(msg) {
            console.log('broadCast Ok');
            socket.broadcast.emit('user:message', socket._user, msg);
        });


        // Set nickname value
        socket.on('nickname', function(user, fn) {
            console.log('nickname Ok');
            _user = _.findWhere(users, {
                id: user.id
            });
            if (!_user) {
                socket._user = user;
                users.push(user);
                socket.broadcast.emit('announcement', 'El usuario ' + user.nickname + ' se ha conectado');
                io.sockets.emit('nicknames', users);
            }
        });

        // user disconnect
        socket.on('disconnect', function() {
            console.log('disconnect');
            if (!socket._user) return;

            users = _.without(users, _.findWhere(users, {
                id: socket._user.id
            }));
            socket.broadcast.emit('announcement', 'El usuario ' + socket._user.nickname + ' se ha desconectado');
            socket.broadcast.emit('nicknames', users);
        });

    });
}
