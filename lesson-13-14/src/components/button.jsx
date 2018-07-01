import React from 'react';

const styles = {
  button: {
    margin: '0 4px',
    padding: '8px 32px',
    fontSize: 16,
    fontWeight: 500,
    textTransform: 'uppercase',
    cursor: 'pointer',
    borderRadius: 2,
  },
};

const Button = ({ text, type = 'button', onClick = () => null }) => (
  <button style={styles.button} type={type} onClick={onClick}>
    {text}
  </button>
);

export default Button;
