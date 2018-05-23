import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const INITIAL_STATE = {
  login: '',
  password: '',
  gender: 'coder',
};

export default class RegisterForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const user = {
      id: v4(),
      ...this.state,
    };

    this.props.onFormSubmit(user);
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="login"
          placeholder="Your login"
          value={this.state.login}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Your password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <select
          name="gender"
          value={this.state.gender}
          onChange={this.handleInputChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="coder">Coder</option>
        </select>
        <button type="submit">Register</button>
      </form>
    );
  }
}
