import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.button`
  position: relative;
  display: inline-block;
  border: none;
  border-radius: 3px;
  margin: 0 4px;
  padding: 0 16px;
  vertical-align: top;
  outline: none;

  font-size: 15px;
  line-height: 2.8;
  color: #222;
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;

  background-color: #fff;
  overflow: hidden;
  z-index: 0;
  cursor: pointer;

  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s, box-shadow 0.3s, opacity 0.3s, color 0.3s;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  min-width: 32px;
  min-height: 36px;
  font-weight: 500;
  font-family: inherit;

  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:active {
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.3);
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
