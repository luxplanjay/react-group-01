import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../shared/input';
import { changeFilter } from '../../redux/actions/filter';
import styles from './styles.css';

const NotesFilter = ({ currentFilter, onChange }) => (
  <form className={styles.form}>
    <Input
      name="text"
      value={currentFilter}
      onChange={e => {
        onChange(e.target.value);
      }}
      placeholder="Filter notes by content..."
    />
  </form>
);

NotesFilter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mSTP = state => ({
  currentFilter: state.filter,
});

const mDTP = dispatch => ({
  onChange: filter => dispatch(changeFilter(filter)),
});

export default connect(mSTP, mDTP)(NotesFilter);
