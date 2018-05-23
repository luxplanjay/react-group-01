/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './theme/base.css';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}

// HMR: https://medium.com/@rajaraodv/webpack-hot-module-replacement-hmr-e756a726a07
// DOCS: https://webpack.js.org/concepts/hot-module-replacement/
