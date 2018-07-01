import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import App from './components/app';
import store, { history } from './redux/store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} basename="/react-group-01/lesson-13-14/build">
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
