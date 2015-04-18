const React = require('react');
const MessageStore = require('../stores/MessageStore');
const ActionCreator = require('../actions/MessageActionCreators');
const MessageList = require('./MessageList.jsx');

let MessagesApp = React.createClass({

    getInitialState() {
        return {
          messages: [{
                id:1,
                user: 'George',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            }, {
                id:2,
                user: 'Albert',
                text: 'Lorem Ipsum has been the industry'
            },
             {
                id:3,
                user: 'George',
                text: 'Lorem Ipsum has been the industry...'
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

    render() {
        let {messages} = this.state;
        return (
            <MessageList messages={messages} />
        );
    }
});

module.exports = MessagesApp;
