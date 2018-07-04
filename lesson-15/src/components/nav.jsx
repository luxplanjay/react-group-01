import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'block',
    padding: '4px 0',
    fontWeight: 500,
    textTransform: 'uppercase',
    fontSize: 24,
    textDecoration: 'none',
    color: '#212121',
  },
  activeLink: {
    color: '#FF4081',
  },
};

const Nav = () => (
  <ul>
    <li>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/posts" style={styles.link} activeStyle={styles.activeLink}>
        Posts
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/profile"
        style={styles.link}
        activeStyle={styles.activeLink}>
        Profile
      </NavLink>
    </li>
  </ul>
);

export default Nav;
