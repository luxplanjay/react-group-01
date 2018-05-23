/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        <input
          className={styles.input}
          type="text"
          placeholder="Filter notes by content..."
          value={filter}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
