var _ = require('underscore');

module.exports = function(io) {

    var users = [],
        messages = [];

    io.sockets.on('connection', function(socket) {

        // BroadCast message
        socket.on('user:message', function(msg) {
            console.log(msg);
            messages.push(msg);
            socket.broadcast.emit('user:message', socket._user, msg);
        });

        // BroadCast message
        socket.on('get:users', function(cb) {
            if (_.isFunction(cb)) {
                cb(users);
            }
        });

        socket.on('get:messages', function(cb) {
            if (_.isFunction(cb)) {
                cb(messages);
            }
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
                io.sockets.emit('users', users);
            }
        });

        // user disconnect
        socket.on('disconnect', function() {
            console.log('disconnect');
            if (!socket._user) return;

            _users = _.without(users, _.findWhere(users, {
                id: socket._user.id
            }));

            if (!_users.length) {
                messages = [];
            }

            socket.broadcast.emit('users', _users);

        });

    });
}
