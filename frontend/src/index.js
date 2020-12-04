import React from 'react';
import ReactDOM from 'react-dom';
import {ReactQueryDevtools} from 'react-query-devtools';

import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ReactQueryDevtools open={false} />
  </React.StrictMode>,
  document.getElementById('root')
);
