import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Button = ({ text, disabled, onClick, type }) => {
  const btnCls = disabled ? styles.disabled : styles.button;

  return (
    <button className={btnCls} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  type: 'button',
};

export default Button;
