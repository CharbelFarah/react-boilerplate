import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routeNames from 'utils/routeNames';
import useIsAuthenticated from 'hooks/useIsAuthenticated';
import ProtectedRoute from './protectedRoute/ProtectedRoute';

const Landing = lazy(() => import('pages/landing/Landing'));
const Page404 = lazy(() => import('pages/page404/Page404'));

const Routes = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Suspense fallback={<>Loading ...</>}>
      <Switch>
        <ProtectedRoute path={routeNames.landing} exact component={Landing} />
        {!isAuthenticated && (
          <Switch>
            <Route path={routeNames.login} exact render={() => <>Login Page</>} />
            <Route path={routeNames.signup} exact render={() => <>Signup Page</>} />
            <Redirect to={routeNames.login} />
          </Switch>
        )}
        <Route component={Page404} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
