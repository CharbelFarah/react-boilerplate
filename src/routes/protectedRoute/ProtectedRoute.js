import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import useIsAuthenticated from 'hooks/useIsAuthenticated';
import routeNames from 'utils/routeNames';

const ProtectedRoute = ({ component: Component, path, exact, ...rest }) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      key={path}
      path={path}
      exact={exact}
      render={(props) =>
        isAuthenticated ? (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Component {...props} />
        ) : (
          // eslint-disable-next-line react/prop-types
          <Redirect to={{ pathname: routeNames.login, state: { from: props.location } }} />
        )
      }
    />
  );
};

ProtectedRoute.defaultProps = {
  exact: false
};

ProtectedRoute.propTypes = {
  component: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool
};

export default ProtectedRoute;
