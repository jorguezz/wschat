const React = require('react');
const UserActions = require('../actions/UserActionCreators');
const ReactPropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;

let UserInput = React.createClass({

    propTypes: {
        id: ReactPropTypes.string,
        value: ReactPropTypes.string
    },

    getInitialState() {
        return {
            value: this.props.value || ''
        };
    },

    _save() {
        // TODO - Send correct user value
        let user = {id: Math.floor((Math.random() * 10000) + 1), nickname: this.state.value};
        UserActions.addUser(user);
        this.setState({
          value: ''
        });
    },

    /**
    * @param {object} event
    */
    _onChange(event) {
        console.log('onChange');
        this.setState({
          value: event.target.value
        });
    },

    /**
    * @param {object} event
    */
    _onKeyDown(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            this._save();
        }
    },

    render() {
        return (
            <input
                className="main__user__input"
                onChange={this._onChange}
                onKeyDown={this._onKeyDown}
                value={this.state.value}
                autoFocus={true}
                autoComplete="off"
            />
        );
    }

});

module.exports = UserInput;
