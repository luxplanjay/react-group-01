import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, disabled, onClick }) => {
  const btnClass = `Button ${disabled ? 'Button--disabled' : ''}`;

  return (
    <button onClick={onClick} className={btnClass}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
};

export default Button;
