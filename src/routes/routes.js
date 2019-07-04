import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/home';
import Login from '../views/login';
import NotFound from '../views/NotFound';
import Header from '../components/header';
import SignUp from '../views/Signup/SignUp';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route component={Header} path="/sass-check" />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
