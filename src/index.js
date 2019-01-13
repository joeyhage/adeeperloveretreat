import 'react-app-polyfill/ie9';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/fn/string/includes';
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
