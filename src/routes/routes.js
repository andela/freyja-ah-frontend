import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import Login from '../views/Login';
import NotFound from '../views/NotFound';
import signUpPage from '../views/Signup/SignUp';
import Modules from '../views/Modules/modules';
import ResetPassword from '../views/ResetPassword/ResetPassword';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signup" component={signUpPage} />
    <Route path="/login" component={Login} />
    <Route path="/modules" component={Modules} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
