import 'core-js/es/map';
import 'core-js/es/set';
import 'core-js/features/string/includes';
import 'raf/polyfill';
import 'react-app-polyfill/ie9';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bulma/css/bulma.css';

import App from './components/App';
import './index.css';
import { unregister } from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

unregister();