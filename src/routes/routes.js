import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import Login from '../views/Login';
import Profile from '../views/Profile/Profile';
import Modules from '../views/Modules/modules';
import NotFound from '../views/NotFound';
import signUpPage from '../views/Signup/SignUp';
import ResetPassword from '../views/ResetPassword/ResetPassword';
import changePassword from '../views/ChangePassword/changePassword';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signup" component={signUpPage} />
    <Route path="/login" component={Login} />
    <Route path="/modules" component={Modules} />
    <Route path="/profile" component={Profile} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route path="/signup" component={signUpPage} />
    <Route path="/change-password" component={changePassword} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
