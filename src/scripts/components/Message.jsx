const React = require('react');
const ActionCreator = require('../actions/MessageActionCreators');

let Message = React.createClass({

    getDefaultProps() {
        return {
            message: {
                id: null,
                text: '',
                user: ''
            }
        };
    },

    render() {
        let message = this.props.message;
        return (
            <div className="wschat__msg">
                <div className="message message_in">
                    <a href="#" className="wschat__item__nickname">{message.user}</a>
                    <p className="wschat__item__line">{message.text}</p>
                </div>
            </div>
        );
    }

});

module.exports = Message;
