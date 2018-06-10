import React from 'react';

const Container = ({ width = 1170, children }) => (
  <div style={{ maxWidth: width, margin: '0 auto' }}>{children}</div>
);

export default Container;
