const React = require('react');
const Message = require('./Message.jsx');

let MessageList = React.createClass({
    getDefaultProps() {
        return {
            tasks: []
        };
    },

    render() {
        let createItem = function(itemText) {
            return (
                <Message key={itemText.id} task={itemText} />
            )
        };

        return <ul>{this.props.tasks.map(createItem)}</ul>;
    }
});

module.exports = MessageList;
