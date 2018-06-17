import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.button`
  display: inline-block;
  vertical-align: middle;
  margin: 0 4px;
  padding: 0px 16px;
  min-width: 32px;
  min-height: 36px;
  border: 0;
  border-radius: 2px;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  text-transform: uppercase;
  font-family: inherit;
  background-color: #795548;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #5d4037;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
`;

const Button = ({ text, type, onClick }) => (
  <Btn type={type} onClick={onClick}>
    {text}
  </Btn>
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
