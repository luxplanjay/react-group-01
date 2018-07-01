import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const styles = {
  list: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    display: 'block',
    padding: '8px',
    fontWeight: 500,
    textTransform: 'uppercase',
    fontSize: 20,
    textDecoration: 'none',
  },
  activeLink: { color: 'palevioletred' },
};

const PublicLinks = () => (
  <Fragment>
    <li>
      <NavLink exact to="/" style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/about" style={styles.link} activeStyle={styles.activeLink}>
        About
      </NavLink>
    </li>
  </Fragment>
);

const PrivateLinks = () => (
  <Fragment>
    <li>
      <NavLink
        to="/articles"
        style={styles.link}
        activeStyle={styles.activeLink}>
        Articles
      </NavLink>
    </li>
  </Fragment>
);

const Nav = ({ authenticated }) => (
  <ul style={styles.list}>
    <PublicLinks />
    {authenticated && <PrivateLinks />}
  </ul>
);

const mapState = state => ({
  authenticated: state.session.authenticated,
  location: state.router.location,
});

export default connect(
  mapState,
  null,
)(Nav);
