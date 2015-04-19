const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

// TODO - Use Backbone.Model/Collections
// TODO - Remove Mocks

let _data = [{
    id: 1,
    user: 'George',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
}, {
    id: 2,
    user: 'Albert',
    text: 'Lorem Ipsum has been the industry'
}, {
    id: 3,
    user: 'George',
    text: 'Lorem Ipsum has been the industry...'
}];

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


        }
    })

});

module.exports = MessageStore;
