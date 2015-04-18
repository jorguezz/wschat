var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

    addMessage: function(message) {
        AppDispatcher.handleViewAction({
            type: Constants.ActionTypes.ADD_MESSAGE,
            message: message
        });
    }

};
