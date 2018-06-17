import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../shared/button';
import styles from './styles.css';

const INITIAL_STATE = {
  text: '',
  priority: 'normal',
};

export default class NoteEditor extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.text === '') return;

    this.props.onSave({ ...this.state });

    this.resetState();
  };

  resetState = () => this.setState({ ...INITIAL_STATE });

  render() {
    const { text, priority } = this.state;
    const { onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <textarea
          className={styles.input}
          name="text"
          value={text}
          onChange={this.handleInputChange}
          rows="8"
          placeholder="Enter note text..."
        />
        <div>
          <span>Priority:</span>
          <select
            className={styles.select}
            value={priority}
            name="priority"
            onChange={this.handleInputChange}>
            <option value="low">low</option>
            <option value="normal">normal</option>
            <option value="high">high</option>
          </select>
        </div>

        <div className={styles.actions}>
          <Button type="submit" text="Save" />
          <Button onClick={onCancel} text="Cancel" />
        </div>
      </form>
    );
  }
}
