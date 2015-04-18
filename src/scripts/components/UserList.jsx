const React = require('react');
const User = require('./User.jsx');

let UserList = React.createClass({
    getDefaultProps() {
        return {
            users: []
        };
    },

    render() {
        let createItem = function(user) {
            return (
                <User key={user.id} user={user} />
            )
        };

        return <ul className="list__users">{this.props.users.map(createItem)}</ul>;
    }
});

module.exports = UserList;
