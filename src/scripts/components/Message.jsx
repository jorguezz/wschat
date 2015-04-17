const React = require('react');
const ActionCreator = require('../actions/MessageActionCreators');

let Message = React.createClass({

    getDefaultProps() {
        return {
            task: {
                title: '',
                completed: false
            }
        };
    },


    handleToggle(task) {
        if (this.refs.checkbox.getDOMNode().checked) {
            ActionCreator.completeTask(task);
        }
    },

    render() {
        let task = this.props.task;
        return (
            <li className="task">
                <label>{task.title}</label>
            </li>
        );
    }

});

module.exports = Message;
