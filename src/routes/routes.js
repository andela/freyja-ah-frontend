import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/home';
import Login from '../views/login';
import NotFound from '../views/NotFound';
import Header from '../components/header';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route component={Header} path="/sass-check" />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
