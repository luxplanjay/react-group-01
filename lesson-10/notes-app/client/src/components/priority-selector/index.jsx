/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const PrioritySelector = ({ changePriorityFilter, currentFilter }) => (
  <select
    className={styles.filter}
    value={currentFilter}
    onChange={e => changePriorityFilter(e.target.value)}>
    <option value="all">all</option>
    <option value="low">low</option>
    <option value="normal">normal</option>
    <option value="high">high</option>
  </select>
);

PrioritySelector.propTypes = {
  changePriorityFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
};

export default PrioritySelector;
