import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from "../Actions/actions"

class TodoItem extends Component {
    render() {
        const { title, completed, handleToggleCompletedTodo, handleDestroyOne } = this.props;
        return (
            <li className={completed ? "completed" : ""}>
                <div className="view">
                    <input className="toggle" type="checkbox" defaultChecked={completed} onClick={handleToggleCompletedTodo} />
                    <label>{title}</label>
                    <button className="destroy" onClick={handleDestroyOne}></button>
                </div>
            </li>
        );
    };
};

export default TodoItem;