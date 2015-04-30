var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

    addUser: function(user) {
        AppDispatcher.handleViewAction({
            type: Constants.ActionTypes.ADD_USER,
            user: user
        });
    }

};
