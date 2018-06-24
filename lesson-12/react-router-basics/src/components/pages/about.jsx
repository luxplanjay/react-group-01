import React from 'react';
import { Route, Link } from 'react-router-dom';

const About = ({ match }) =>
  console.log(match) || (
    <div>
      <h2>About page</h2>

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
        render={props => {
          console.log('props:', props);
          return <h2>About {props.match.params.category}</h2>;
        }}
      />
    </div>
  );

export default About;
