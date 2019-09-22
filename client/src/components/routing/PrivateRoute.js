import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { admin, loading } = authContext;

  return (
    <Route
      {...rest}
      render={props =>
        !admin && !loading ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
