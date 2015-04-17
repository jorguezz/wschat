var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

    addMessage: function(text) {
        AppDispatcher.handleViewAction({
            type: Constants.ActionTypes.ADD_MESSAGE,
            text: text
        });
    }

};
