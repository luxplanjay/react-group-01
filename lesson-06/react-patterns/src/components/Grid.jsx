import React, { Children } from 'react';

const styles = {
  container: {
    display: 'flex',
  },
  column: {
    flexGrow: 1,
    padding: '0 15px',
  },
};

const Grid = ({ children }) => {
  const columns = Children.map(children, child => (
    <div style={styles.column}>{child}</div>
  ));

  return <div style={styles.container}>{columns}</div>;
};

export default Grid;
