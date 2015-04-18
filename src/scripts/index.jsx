const React = require('react');
const UsersApp = require('./components/UsersApp.jsx');
const MessagesApp = require('./components/MessagesApp.jsx');

React.render(<UsersApp />, document.getElementById('users_panel'));
React.render(<MessagesApp />, document.getElementById('messages_panel'));
