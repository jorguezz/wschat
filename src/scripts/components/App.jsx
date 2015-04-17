const React = require('react');
const MessageStore = require('../stores/MessageStore');
const ActionCreator = require('../actions/MessageActionCreators');
const MessageList = require('./MessageList.jsx');

let App = React.createClass({

    getInitialState() {
        return {
          tasks: [{
                id:1,
                title: 'foo'
            }, {
                id:2,
                title: 'bar'
            }]
        }
    },

    _onChange() {
        this.setState(MessageStore.getAll());
    },

    componentDidMount() {
        MessageStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        MessageStore.removeChangeListener(this._onChange);
    },

    handleAddNewClick(e) {
        let title = prompt('Enter message title:');
        if (title) {
            ActionCreator.addItem(title);
        }
    },

    render() {
        let {tasks} = this.state;
        return (
            <MessageList tasks={tasks} />
        );
    }
});

module.exports = App;
