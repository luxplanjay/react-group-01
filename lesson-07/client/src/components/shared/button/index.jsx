import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Button = ({ disabled, onClick, type, children }) => {
  const btnCls = disabled ? styles.disabled : styles.button;

  return (
    <button className={btnCls} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.shape({}),
  ]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  type: 'button',
  children: '',
};

export default Button;
