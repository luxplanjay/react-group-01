import React, { Component } from 'react';
import { v4 } from 'uuid';
// import Counter from './Counter';
// import RegisterForm from './RegisterForm';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import InlineMessage from './InlineMessage';
import initialTodos from '../todos';

export default class extends Component {
  state = {
    // users: [],
    todos: [...initialTodos],
  };

  // addUser = user => {
  //   this.setState(prevState => ({
  //     users: prevState.users.concat([user]),
  //   }));
  // };

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
    // const { users } = this.state;
    const { todos } = this.state;

    return (
      <div>
        <h1>App Component</h1>
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

        {/* <RegisterForm onFormSubmit={this.addUser} />
        {users.length > 0 ? (
          <ul>
            {this.state.users.map(user => (
              <li key={user.id}>
                <p>Login: {user.login}</p>
                <p>Password: {user.password}</p>
                <p>Gender: {user.gender}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No users yet!</p>
        )} */}

        {/* <Counter startValue={15} incrementBy={5} decrementBy={5} /> */}
      </div>
    );
  }
}
