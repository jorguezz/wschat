const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

// data storage
let _data = [];

// add private functions to modify data
function addItem(message) {
    _data.push(message);
}

let MessageStore = assign({}, BaseStore, {

    // public methods used by Controller-View to operate on data
    getAll() {
        return {
            messages: _data
        };
    },

    // register store with dispatcher, allowing actions to flow through
    dispatcherIndex: AppDispatcher.register(function(payload) {
        let action = payload.action;

        switch (action.type) {
            case Constants.ActionTypes.ADD_MESSAGE:
                let text = action.message.text.trim();

                if (text !== '') {
                    addItem(action.message);
                    MessageStore.emitChange();
                }
                break;

                // add more cases for other actionTypes...
        }
    })

});

module.exports = MessageStore;
