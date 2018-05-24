import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.css';

const Input = ({ value, name, placeholder, onChange }) => (
  <input
    className={styles.input}
    type="text"
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
};

export default Input;
