import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import Login from '../views/Login';
import Profile from '../views/Profile/Profile';
import Dashboard from '../views/Dashboard/Dashboard';
import ViewModule from '../views/ViewModule';
import NotFound from '../views/NotFound';
import signUpPage from '../views/Signup/SignUp';
import ResetPassword from '../views/ResetPassword/ResetPassword';
import changePassword from '../views/ChangePassword/changePassword';
import VerifyUserPage from '../views/VerifyUser/verifyUser';
import CommunityPage from '../views/Community/CommunityPage';

import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import PublicRoute from '../components/PublicRoute/PublicRoute';
import About from '../views/AboutUs/AboutUs';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/aboutus" component={About} />
    <PrivateRoute path="/community" component={CommunityPage} />
    <PrivateRoute path="/view-module/:moduleId" component={ViewModule} />
    <PublicRoute path="/verify" component={VerifyUserPage} />
    <PublicRoute path="/signup" component={signUpPage} />
    <PublicRoute path="/login" component={Login} />
    <PublicRoute path="/password-reset" component={ResetPassword} />
    <PublicRoute path="/change-password" component={changePassword} />
    <PrivateRoute path="/profile" component={Profile} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
