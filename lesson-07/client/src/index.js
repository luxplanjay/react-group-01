import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import CrudProvider from './components/context/crud';
import './theme/base.css';

ReactDOM.render(
  <CrudProvider>
    <App />
  </CrudProvider>,
  document.getElementById('root'),
);
