import React, { Component } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  title: '',
};

export default class AddTodoForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.title);

    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter todo title"
          value={title}
          onChange={this.handleInputChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}
