import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes/routes';
import store from '../store/index';
import './style.css';

const App = () => <Routes />;

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
