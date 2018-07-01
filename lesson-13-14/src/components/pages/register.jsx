import React, { Component } from 'react';
import Button from '../button';

const styles = {
  page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: 320,
    marginBottom: 16,
    padding: 4,
    fontSize: 18,
  },
};

const INITIAL_STATE = { name: '', login: '', password: '' };

export default class LoginPage extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = e => {
    e.preventDefault();

    const { name, login, password } = this.state;

    if (name === '' || login === '' || password === '') return;

    this.resetState();
  };

  resetState = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleInputChange = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  render() {
    const { name, login, password } = this.state;

    return (
      <div style={styles.page}>
        <form onSubmit={this.onSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            style={styles.input}
            placeholder="Name"
            value={name}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="login"
            style={styles.input}
            placeholder="Email"
            value={login}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            style={styles.input}
            placeholder="Password"
            value={password}
            onChange={this.handleInputChange}
          />
          <Button text="Register" type="submit" />
        </form>
      </div>
    );
  }
}
