import React from 'react';
import PropTypes from 'prop-types';
const Button = ({ type, text, onClick, ...rest }) => (
  <button type={type} onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
  text: '',
  type: 'button',
};

export default Button;
