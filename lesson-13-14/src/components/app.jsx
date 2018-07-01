import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import ArticlesPage from './pages/articles';
import AboutPage from './pages/about';
import RegisterPage from './pages/register';
import Article from './article';
import AppBar from './app-bar';
import ProtectedRoute from './protected-route';

const styles = {
  app: {
    maxWidth: 1170,
    margin: '0 auto',
    padding: '0 16px',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
};

const App = ({ authenticated }) => (
  <div style={styles.app}>
    <AppBar />

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/about" component={AboutPage} />
      <ProtectedRoute
        exact
        path="/articles"
        component={ArticlesPage}
        redirectTo="/login"
        authenticated={authenticated}
      />
      <ProtectedRoute
        exact
        path="/articles/:articleId"
        component={Article}
        redirectTo="/login"
        authenticated={authenticated}
      />
      <Redirect to="/" />
    </Switch>
  </div>
);

const mapState = state => ({
  authenticated: state.session.authenticated,
});

export default connect(
  mapState,
  null,
)(App);
