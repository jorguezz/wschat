const React = require('react');
const UserStore = require('../stores/UserStore');
const UserList = require('./UserList.jsx');

let UsersApp = React.createClass({

    getInitialState() {
        return {
          users: []
        }
    },

    _onChange() {
        this.setState(UserStore.getAll());
    },

    componentDidMount() {
        UserStore.addChangeListener(this._onChange);
        UserStore.addSocketListener(this._onChange);
    },

    componentWillUnmount() {
        UserStore.removeChangeListener(this._onChange);
    },

    render() {
        let {users} = this.state;
        return (
            <UserList users={users} />
        );
    }
});

module.exports = UsersApp;
