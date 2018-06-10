/* eslint-disable */
import React from 'react';

const Container = ({ width = 1170, styles = {}, children }) => (
  <div
    style={{ maxWidth: width, margin: '0 auto', padding: '0 16px', ...styles }}>
    {children}
  </div>
);

export default Container;
