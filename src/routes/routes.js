import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import store from '../../store/index';
import Login from '../views/login';
import NotFound from '../views/NotFound';
import { Header } from '../components/Header/Header';
import Signup from '../views/Signup/SignUp';
import Modules from '../views/Modules/modules';

const Routes = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/modules" component={Modules} />
      <Route component={Header} path="/sass-check" />
      <Route component={NotFound} />
    </Switch>
  </Provider>
);

export default Routes;
