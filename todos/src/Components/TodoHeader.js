import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from "../Actions/actions"

class TodoHeader extends Component {
    state = {
        title: ""
    };

    handleChange = event => {
        this.setState({
            title: event.target.value
        })
    };
    
    handleAddTodo = event => {
        const { addTodo } = this.props;
        const { title } = this.state;
        if (event.keyCode === 13) { // 13 is the code for enter; could also do event.key == "Enter"
            addTodo(title);
            event.target.value = "";
        };
    };

    render() {
        const { title } = this.state;
        return (
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo" placeholder="What needs to be done?" autoFocus onChange={this.handleChange} onKeyDown={this.handleAddTodo} value={title} />
            </header>
        );
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: title => dispatch(addTodo(title))
    }
};
export default connect(null, mapDispatchToProps)(TodoHeader);