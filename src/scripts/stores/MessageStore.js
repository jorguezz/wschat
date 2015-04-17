const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

// data storage
let _data = [{
    title: 'holaa',
    completed: true
}, {
    title: 'adios',
    completed: true
}];

// add private functions to modify data
function addItem(title, completed = false) {
    _data.push({
        title, completed
    });
}

// Facebook style store creation.
let MessageStore = assign({}, BaseStore, {

    // public methods used by Controller-View to operate on data
    getAll() {
        console.log(_data);
        return {
            tasks: _data
        };
    },

    // register store with dispatcher, allowing actions to flow through
    dispatcherIndex: AppDispatcher.register(function(payload) {
        let action = payload.action;

        switch (action.type) {
            case Constants.ActionTypes.ADD_MESSAGE:
                let text = action.text.trim();

                if (text !== '') {
                    addItem(text);
                    MessageStore.emitChange();
                }
                break;

                // add more cases for other actionTypes...
        }
    })

});

module.exports = MessageStore;