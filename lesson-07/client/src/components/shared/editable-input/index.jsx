import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import styles from './styles.css';

export default class EditableInput extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onEditSuccess: PropTypes.func.isRequired,
    onEditAbort: PropTypes.func.isRequired,
  };

  state = { text: this.props.text };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleEditSuccess = e => {
    e.preventDefault();

    this.props.onEditSuccess(this.state.text);
  };

  handleEditCancel = e => {
    e.preventDefault();

    this.props.onEditAbort();
  };

  render() {
    const { text } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleEditSuccess}>
        <textarea
          className={styles.input}
          name={'text'}
          value={text}
          rows={8}
          onChange={this.handleInputChange}
        />

        <div className={styles.actions}>
          <Button type="submit">Save</Button>
          <Button onClick={this.handleEditCancel} type="submit">
            Cancel
          </Button>
        </div>
      </form>
    );
  }
}
