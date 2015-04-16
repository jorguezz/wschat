const React = require('react');
const TodoStore = require('../stores/TodoStore');
const ActionCreator = require('../actions/TodoActionCreators');
const TaskList = require('./TaskList.jsx');

let App = React.createClass({

  getInitialState() {
    return {
      tasks: []
    }
  },

  _onChange() {
    this.setState(TodoStore.getAll());
  },

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  },

  handleAddNewClick(e) {
    let title = prompt('Enter task title:');
    if (title) {
      ActionCreator.addItem(title);
    }
  },

  handleClearListClick(e) {
    ActionCreator.clearList();
  },

  render() {
    let {tasks} = this.state;
    return (
      <div>
        <h1>Learn Flux</h1>

        <TaskList tasks={tasks} />

        <button onClick={this.handleAddNewClick}>Add New</button>
        <button onClick={this.handleClearListClick}>Clear List</button>
      </div>
    );
  }

});

module.exports = App;
