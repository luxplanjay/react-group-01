import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './shared/Button';
import Input from './shared/Input';
import styles from './EditableInput.css';

export default class EditableInput extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onEditSuccess: PropTypes.func.isRequired,
    onEditAbort: PropTypes.func.isRequired,
  };

  state = { text: this.props.text };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleEditSuccess = e => {
    e.preventDefault();

    this.props.onEditSuccess(this.state.text);
  };

  render() {
    const { text } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleEditSuccess}>
        <Input name="text" value={text} onChange={this.handleInputChange} />

        <div className={styles.actions}>
          <Button type="submit" text="Save" />
          <Button onClick={this.props.onEditAbort} text="Cancel" />
        </div>
      </form>
    );
  }
}
