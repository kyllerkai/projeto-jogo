/* eslint-disable */
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
// import { AuthContext } from "../context/Auth";
import { useAuth } from '../context/AuthContext';

export const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { currentUser } = useAuth();
  if (!Component) return null;
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Component { ...props } /> : <Redirect to="/welcome"/>}}
    ></Route>
  );
};

export const RedirectRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) =>{
  const { currentUser } = useAuth();
  if (!Component) return null;
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Redirect to="/" /> : <Component {...props} /> ;
      }}
    ></Route>
  );
}
