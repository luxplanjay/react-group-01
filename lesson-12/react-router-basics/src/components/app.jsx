import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import NotFoundPage from './pages/not-found';
import HomePage from './pages/home';
import ArticlesPage from './pages/articles';
import AboutPage from './pages/about';
import Article from './article';
import './app.css';

const styles = { activeLink: { color: 'palevioletred' } };

const App = () => (
  <div className="App">
    <h1 className="App__title">React Router Basics</h1>

    <ul>
      <li>
        <NavLink exact to="/" activeStyle={styles.activeLink}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/articles" activeStyle={styles.activeLink}>
          Articles
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={styles.activeLink}>
          About
        </NavLink>
      </li>
    </ul>

    <Switch>
      {/* <Route
        exact
        path="/"
        render={props => <HomePage {...props} superProp="super" />}
      /> */}
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route exact path="/articles" component={ArticlesPage} />
      <Route path={`/articles/:articleId`} component={Article} />
      <Route component={NotFoundPage} />
      {/* <Redirect to="/about" /> */}
    </Switch>
  </div>
);

export default App;
