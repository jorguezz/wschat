const React = require('react');
const ReactPropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;

let MessageInput = React.createClass({

    propTypes: {
        id: ReactPropTypes.string,
        //onSave: ReactPropTypes.func.isRequired,
        value: ReactPropTypes.string
    },

    getInitialState() {
        return {
            value: this.props.value || ''
        };
    },

    /*
    * Invokes the callback passed in as onSave, allowing this component to be
    * used in different ways.
    */
    _save() {
        //this.props.onSave(this.state.value);
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
                className="main__sendmessage__input"
                id="message"
                placeholder={this.props.placeholder}
                onChange={this._onChange}
                onKeyDown={this._onKeyDown}
                value={this.state.value}
                autoFocus={true}
                autoComplete="off"
            />
        );
    }

});

module.exports = MessageInput;
