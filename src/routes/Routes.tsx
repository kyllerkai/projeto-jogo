/* eslint-disable */
import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import {
  Home,
  Welcome,
  Login,
  Signup,
  PageNotFound,
  ForgotPassword,
  Team,
} from '../pages';
import { PrivateRoute, RedirectRoute } from '../private/';
// import { AuthProvider } from '../Provider/AuthProvider';
import { AuthProvider } from '../context/AuthContext';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path={ROUTES.HOME} component={Home} />
          <RedirectRoute path={ROUTES.WELCOME} component={Welcome} />
          <RedirectRoute path={ROUTES.SIGN_IN} component={Login} />
          <RedirectRoute path={ROUTES.SIGN_UP} component={Signup} />
          <Route path={ROUTES.FORGOT} component={ForgotPassword} />
          <Route path={ROUTES.TEAM} component={Team} />
          <Route component={PageNotFound} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}
