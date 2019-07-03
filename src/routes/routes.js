import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import Login from '../views/Login';
import Profile from '../views/Profile/Profile';
import NotFound from '../views/NotFound';
import ResetPassword from '../views/ResetPassword';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signup" component={signUpPage} />
    <Route path="/login" component={Login} />
    <Route path="/modules" component={Modules} />
    <Route path="/profile" component={Profile} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
