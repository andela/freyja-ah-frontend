import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import '@babel/polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faUserFriends, faCertificate, faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import store from '../store';

import './style.css';

library.add(faUserFriends, faCertificate, faPeopleCarry);

library.add(fab);

const App = () => <Routes />;

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
