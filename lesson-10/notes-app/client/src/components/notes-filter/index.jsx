import React from 'react';
import PropTypes from 'prop-types';
import Input from '../shared/input';
import styles from './styles.css';

const NotesFilter = ({ currentFilter, onChange }) => (
  <form className={styles.form}>
    <Input
      name="text"
      value={currentFilter}
      onChange={e =>  onChange(e.target.value)}
      placeholder="Filter notes by content..."
    />
  </form>
);

NotesFilter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NotesFilter;
