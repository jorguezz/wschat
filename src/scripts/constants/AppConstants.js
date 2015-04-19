const keyMirror = require('react/lib/keyMirror');

module.exports = {

    ActionTypes: keyMirror({
        ADD_MESSAGE: 'add-message'
    }),

    ActionSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })

};
