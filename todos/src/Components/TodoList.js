import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from "./TodoItem.js";
import TodoHeader from './TodoHeader.js';
import TodoFooter from './TodoFooter.js';

class TodoList extends Component {
    render() {
        const { todos, handleAddTodo } = this.props;
        return (
            <React.Fragment>
                <TodoHeader handleAddTodo={handleAddTodo} />
                <section className="main">
                    <ul className="todo-list">
                        {todos.map(todo => <TodoItem key={todo.id} title={todo.title} completed={todo.completed} handleToggleCompletedTodo={this.props.handleToggleCompletedTodo(todo.id)} handleDestroyOne={this.props.handleDestroyOne(todo.id)} />)}
                    </ul>
                </section>
                <TodoFooter completed={this.props.completed} handleDestroyAllCompletedTodos={this.props.handleDestroyAllCompletedTodos} filter={this.props.location.pathname} />
            </React.Fragment>
        );
    };
};

export default TodoList;