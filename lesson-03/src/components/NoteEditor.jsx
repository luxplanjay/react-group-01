import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './shared/Button';
import Input from './shared/Input';
import styles from './NoteEditor.css';

const INITIAL_STATE = {
  text: '',
};

export default class NoteEditor extends Component {
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

    if (this.state.text === '') {
      return;
    }

    this.props.onFormSubmit(this.state.text);

    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <Input
          name="text"
          value={text}
          onChange={this.handleInputChange}
          placeholder="Enter note text..."
        />

        <Button type="submit" text="Add Note" />
      </form>
    );
  }
}
