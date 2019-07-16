import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faUserFriends, faCertificate, faPeopleCarry, faLock } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Routes from './routes/routes';
import store from '../store';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './store/actions/authActions';

import './style.css';

library.add(faUserFriends, faCertificate, faPeopleCarry, faLock);
library.add(fab);

const App = () => <Routes />;

if (localStorage.token) {
  setAuthToken(localStorage.token);
  const decoded = jwtDecode(localStorage.token);
  store.dispatch(setCurrentUser(decoded));
}

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
