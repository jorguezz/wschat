const React = require('react');
const UsersApp = require('./components/UsersApp.jsx');
const MessagesApp = require('./components/MessagesApp.jsx');
const MessageInput = require('./components/MessageInput.jsx');

React.render(<UsersApp />, document.getElementById('users_panel'));
React.render(<MessagesApp />, document.getElementById('messages_panel'));
React.render(<MessageInput />, document.getElementById('send-message'));
