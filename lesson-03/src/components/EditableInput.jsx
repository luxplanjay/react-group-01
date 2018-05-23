import React, { Component } from 'react';
import PropTypes from 'prop-types';

// TODO: не сабмитится при Enter, нужна форма с onSubmit

export default class EditableInput extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onEditSuccess: PropTypes.func.isRequired,
    onEditAbort: PropTypes.func.isRequired,
  };

  state = { text: this.props.text };

  // TODO: не добавлять пустой Note
  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleEditSuccess = () => this.props.onEditSuccess(this.state.text);

  render() {
    const { text } = this.state;

    return (
      <span>
        <button onClick={this.handleEditSuccess}>Save</button>
        <button onClick={this.props.onEditAbort}>Cancel</button>
        <input
          type="text"
          name="text"
          value={text}
          onChange={this.handleInputChange}
        />
      </span>
    );
  }
}
