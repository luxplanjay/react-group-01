import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

// TODO: показать HMR

// const render = () => {
//   const App = require('./components/App').default;
//   ReactDOM.render(<App />, document.getElementById('root'));
// };

// render();

// if (module.hot && process.env.NODE_ENV !== 'production') {
//   module.hot.accept('./components/App', render);
// }

// HMR: https://medium.com/@rajaraodv/webpack-hot-module-replacement-hmr-e756a726a07
// DOCS: https://webpack.js.org/concepts/hot-module-replacement/
