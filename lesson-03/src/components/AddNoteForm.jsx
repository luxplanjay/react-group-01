import React, { Component } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  text: '',
};
// TODO: заменить на NoteEditor
export default class AddNoteForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  // TODO: проверить что хоть что-то ввели
  handleSubmit = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.text);

    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Enter note text..."
          value={text}
          onChange={this.handleInputChange}
        />
        {/* TODO: использовать компонент Button */}
        <button type="submit">Add Note</button>
      </form>
    );
  }
}
