import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Button = ({ text, type, onClick }) => (
  <button className={styles.button} type={type} onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => null,
  type: 'button',
  text: '',
};

export default Button;
