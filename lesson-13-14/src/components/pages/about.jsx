import React from 'react';
import { Route, Link } from 'react-router-dom';

const About = ({ match }) => (
  <div>
    <h2>About page (public)</h2>

    <ul>
      <li>
        <Link to={`${match.url}/team`}>Team</Link>
      </li>
      <li>
        <Link to={`${match.url}/company`}>Company</Link>
      </li>
    </ul>

    <Route
      path={`${match.path}/:category`}
      render={props => <h2>About {props.match.params.category}</h2>}
    />
  </div>
);

export default About;
