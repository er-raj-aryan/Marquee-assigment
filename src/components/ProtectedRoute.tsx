import React, { useContext } from 'react';
import { Route, Navigate, RouteProps } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { match } from 'assert';

interface ProtectedRouteProps {
  // component: React.ComponentType<any>;
}

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
const ProtectedRoute: React.FC<ProtectedRouteProps> = () => {
  const { user } = useContext(UserContext);

  return (
    <>
    {/* // <Route
    //   {...rest}
    //   // children={(props:any) => (user ? <Component {...props} /> : <Navigate to="/login" />)}
    //   children={( {user:any} ) => {user ? (<Component match={match} animate={true} />) : (<Navigate to="/login" />)}}
    // /> */}
    </>
  );
};

export default ProtectedRoute;
