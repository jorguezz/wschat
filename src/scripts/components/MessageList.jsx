const React = require('react');
const Message = require('./Message.jsx');

let MessageList = React.createClass({
    getDefaultProps() {
        return {
            messages: []
        };
    },

    render() {
        let createItem = function(message) {
            return (
                <Message key={message.id} message={message} />
            )
        };

        return <div className="message__list">{this.props.messages.map(createItem)}</div>;
    }
});

module.exports = MessageList;
