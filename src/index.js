import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';

import './style.css';

const App = () => <Routes />;

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
);
