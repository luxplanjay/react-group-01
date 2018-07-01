import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { NavLink } from 'react-router-dom';
import { signUserOut } from '../redux/actions';
import Button from './button';

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

const PublicActions = () => (
  <Fragment>
    <li>
      <NavLink to="/login" style={styles.link} activeStyle={styles.activeLink}>
        Login
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/register"
        style={styles.link}
        activeStyle={styles.activeLink}>
        Register
      </NavLink>
    </li>
  </Fragment>
);

const PrivateActions = ({ signUserOut, push }) => (
  <Fragment>
    <li>
      <Button
        text="Logout"
        onClick={async () => {
          await signUserOut();
          push('/');
        }}
      />
    </li>
  </Fragment>
);

const AuthManager = ({ authenticated, ...props }) => (
  <ul style={styles.list}>
    {authenticated ? (
      <PrivateActions {...props} />
    ) : (
      <PublicActions {...props} />
    )}
  </ul>
);

const mapState = state => ({
  authenticated: state.session.authenticated,
});

const mapDispatch = { push, signUserOut };

export default connect(
  mapState,
  mapDispatch,
)(AuthManager);

// export default compose(
//   withRouter,
//   connect(
//     mapState,
//     mapDispatch,
//   ),
// )(AuthManager);
