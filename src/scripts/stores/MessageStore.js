const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

const USER_MESSAGE = 'user:message';

// TODO - Use Backbone.Model/Collections
// TODO - Remove Mocks

let _data = [];

// add private functions to modify data
function _addItem(message) {
    _data.push(message);
}

let MessageStore = assign({}, BaseStore, {

    // public methods used by Controller-View to operate on data
    getAll() {
        return {
            messages: _data
        };
    },

    addItem(message) {
        _addItem(message);
        MessageStore.emitChange();
    },


    addSocketListener() {
        BaseStore.socket().on(USER_MESSAGE, function(from, msg) {
            let message = {
                id: Math.floor((Math.random() * 10000) + 1), // TODO remove id mock
                text: msg,
                user: 'RandomUser'
            };
            this.addItem(message);
        }.bind(this));
    },

    // register store with dispatcher, allowing actions to flow through
    dispatcherIndex: AppDispatcher.register(function(payload) {
        let action = payload.action;

        switch (action.type) {
            case Constants.ActionTypes.ADD_MESSAGE:
                let text = action.message.text.trim();

                if (text !== '') {
                    BaseStore.socket().emit('user:message', text);
                    MessageStore.addItem(action.message);
                }
                break;

        }
    })

});

module.exports = MessageStore;
