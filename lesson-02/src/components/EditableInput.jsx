import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EditableInput extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onEditSuccess: PropTypes.func.isRequired,
    onEditAbort: PropTypes.func.isRequired,
  };

  state = { title: this.props.title };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleEditSuccess = () => {
    this.props.onEditSuccess(this.state.title);
  };

  render() {
    const { title } = this.state;

    return (
      <span>
        <button onClick={this.handleEditSuccess}>Save</button>
        <button onClick={this.props.onEditAbort}>Cancel</button>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleInputChange}
        />
      </span>
    );
  }
}
