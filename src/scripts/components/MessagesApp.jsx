const React = require('react');
const MessageStore = require('../stores/MessageStore');
const ActionCreator = require('../actions/MessageActionCreators');
const MessageList = require('./MessageList.jsx');

let MessagesApp = React.createClass({

    getInitialState() {
        MessageStore.getMessages();
        return {
            users : []
        }
    },

    _onChange() {
        this.setState(MessageStore.getAll());
    },

    componentDidMount() {
        MessageStore.addChangeListener(this._onChange);
        MessageStore.addSocketListener(this._onChange);
    },

    componentWillUnmount() {
        MessageStore.removeChangeListener(this._onChange);
    },

    render() {
        let {messages} = this.state;
        return (
            <MessageList messages={messages} />
        );
    }
});

module.exports = MessagesApp;
