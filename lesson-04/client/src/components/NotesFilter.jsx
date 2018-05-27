import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './shared/Input';
import styles from './NotesFilter.css';

export default class NotesFilter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
  };

  handleChange = e => {
    this.props.onFilterChange(e.target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <form className={styles.form}>
        <Input
          name="text"
          value={filter}
          onChange={this.handleChange}
          placeholder="Filter notes by content..."
        />
      </form>
    );
  }
}
