import React, { Component } from 'react';
import TodoList from "./TodoList.js";
import { Switch, Route } from "react-router-dom";
import todoList from '../todos.json';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from "../Actions/actions"

class App extends Component {
  handleToggleCompletedTodo = clickedTodoId => event => {
    this.props.toggleTodo(clickedTodoId)
  };
  handleDestroyOne = clickedTodoId => event => {
    this.props.deleteTodo(clickedTodoId);
  };

  render() {
    const { todos } = this.props;
    const allHandlingProps = {
      handleDestroyOne: this.handleDestroyOne,
      handleToggleCompletedTodo: this.handleToggleCompletedTodo,
      completed: todos.filter(todo => !todo.completed).length
    };
    return (
      <section className="todoapp">
        <Switch>
          <Route exact path="/active" render={props => <TodoList {...props} {...allHandlingProps} todos={todos.filter(todo => !todo.completed)} />} />
          <Route exact path="/completed" render={props => <TodoList {...props} {...allHandlingProps} todos={todos.filter(todo => todo.completed)} />} />
          <Route exact path="/" render={props => <TodoList {...props} {...allHandlingProps} todos={todos} />} />
        </Switch>
      </section>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    todos: state.todoList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleTodo: id => dispatch(toggleTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)