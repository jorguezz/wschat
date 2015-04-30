const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

const USER_NICKNAMES = 'users';

// TODO - Use Backbone.Model/Collections
let _data = [];

// add private functions to modify data
function _addItem(user) {
    _data.push(user);
}

function _resetItems(users) {
    _data = users;
}

let UserStore = assign({}, BaseStore, {

    // public methods used by Controller-View to operate on data
    getAll() {
        return {
            users: _data
        };
    },

    addItem(user) {
        _addItem(user);
        UserStore.emitChange();
    },

    resetItems(users) {
        _resetItems(users);
        UserStore.emitChange();
    },

    getUsers() {
        BaseStore.socket().emit('get:users', function(users) {
            this.resetItems(users);
        }.bind(this));
    },

    addSocketListener() {
        BaseStore.socket().on(USER_NICKNAMES, function(users) {
            this.resetItems(users);
        }.bind(this));
    },

    // register store with dispatcher, allowing actions to flow through
    dispatcherIndex: AppDispatcher.register(function(payload) {
        let action = payload.action;
        switch (action.type) {

            case Constants.ActionTypes.ADD_USER:
                let user = action.user;

                if (user) {
                    BaseStore.socket().emit('nickname', user, function(err) {
                        if (err) {
                            console.log(err);
                        }
                    });
                }
                break;
        }
    })

});

module.exports = UserStore;
