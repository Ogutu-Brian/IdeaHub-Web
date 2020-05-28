import React, { FC, Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Config, routesConfig } from './routesConfig';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Exception = lazy(() => import('./Exception'));
const Application = lazy(() => import('../Application/Application'));

const antIcon = (
  <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <LoadingOutlined style={{ fontSize: 24 }} spin />
  </div>
);

const AuthComponent: FC<any> = (props) => {
  const { component: Component, authenticated, allowedRoles, showLayout } = props;
  const auth = {
    isLoggedIn: true,
  };
  const user = { role: '' };

  if (authenticated && !auth.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Exception {...props} exception={403} text="You are not authorized to access this page" />;
  }

  if (showLayout) {
    return (
      <Application>
        <Component {...props} />
      </Application>
    );
  }

  return <Component {...props} />;
};

const Routes: FC<{}> = () => {
  return (
    <Switch>
      {routesConfig.map((each: Config, index: number) => (
        <Route
          key={index}
          exact
          path={each.path}
          render={(props: any) => (
            <Suspense fallback={<Spin indicator={antIcon} />}>
              <AuthComponent {...props} {...each} />
            </Suspense>
          )}
        />
      ))}
    </Switch>
  );
};

export default Routes;
