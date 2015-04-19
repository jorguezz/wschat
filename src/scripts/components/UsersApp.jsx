const React = require('react');
const UserList = require('./UserList.jsx');

let UsersApp = React.createClass({

    getInitialState() {
        return {
          users: [{
                id:1,
                name: 'George',
            }, {
                id:2,
                name: 'Albert',
            },{
                id:3,
                name: 'Jimmy',
            },{
                id:4,
                name: 'Tom',
            },{
                id:5,
                name: 'Jaime',
            },{
                id:6,
                name: 'Walter',
            },{
                id:7,
                name: 'Carla',
            }
            ]
        }
    },

    _onChange() {
        this.setState(UserStore.getAll());
    },

    componentDidMount() {
        //UserStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        //UserStore.removeChangeListener(this._onChange);
    },

    render() {
        let {users} = this.state;
        return (
            <UserList users={users} />
        );
    }
});

module.exports = UsersApp;
