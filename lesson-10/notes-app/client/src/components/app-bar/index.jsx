/* eslint-disable */
import React from 'react';
import styles from './styles.css';
import Container from '../shared/container';

const AppBar = ({ children }) => (
  <header className={styles.header}>
    <Container
      styles={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      {children}
    </Container>
  </header>
);

export default AppBar;
