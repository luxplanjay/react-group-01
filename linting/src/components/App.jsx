import React, { Component } from 'react';
import { v4 } from 'uuid';
import initialTodos from '../todos';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import InlineMessage from './InlineMessage';

export default class extends Component {
  state = {
    todos: [...initialTodos],
  };

  addTodo = title => {
    this.setState(state => ({
      todos: [{ id: v4(), title }, ...state.todos],
    }));
  };

  deleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id),
    }));
  };

  updateTodo = (id, text) => {
    this.setState(state => ({
      todos: state.todos.map(
        todo => (todo.id === id ? { ...todo, title: text } : todo),
      ),
    }));
  };

  render() {
    const { todos } = this.state;

    return (
      <div>
        <AddTodoForm onFormSubmit={this.addTodo} />
        {todos.length > 0 ? (
          <TodoList
            todos={todos}
            onDeleteTodo={this.deleteTodo}
            onUpdateTodo={this.updateTodo}
          />
        ) : (
          <InlineMessage text="No todos yet" />
        )}
      </div>
    );
  }
}
