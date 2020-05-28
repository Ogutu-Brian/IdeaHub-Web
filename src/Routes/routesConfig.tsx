import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const Exception = lazy(() => import('./Exception'));
const LandingPage = lazy(() => import('../LandingPage/LandingPage'));
const Ideas = lazy(() => import('../Ideas/Ideas'));
const MyProfile = lazy(() => import('../MyProfile/MyProfile'));
const PersonComponent = lazy(() => import('../Profile/Profile'));
const CodeVerification = lazy(() => import('../CodeVerification/CodeVerification'));

export interface Config {
  name?: string;
  path: string;
  allowedRoles?: string[];
  authenticated: boolean;
  component: any;
  showLayout: boolean;
}

export const routesConfig: Config[] = [
  {
    component: () => <Redirect to="/signup" />,
    path: '/',
    authenticated: false,
    showLayout: false,
  },
  {
    component: () => <LandingPage hasAccount={true} />,
    path: '/login',
    authenticated: false,
    showLayout: false,
  },
  {
    path: '/ideahub',
    component: () => <Redirect to="/ideahub/ideas" />,
    authenticated: true,
    showLayout: true,
  },
  {
    component: () => <LandingPage hasAccount={false} />,
    path: '/signup',
    authenticated: false,
    showLayout: false,
  },
  {
    path: '/verify',
    component: CodeVerification,
    authenticated: false,
    showLayout: false,
  },
  {
    path: '/ideahub/ideas',
    authenticated: true,
    showLayout: true,
    component: Ideas,
  },
  {
    path: '/ideahub/profile',
    authenticated: true,
    showLayout: true,
    component: MyProfile,
  },
  {
    path: '/ideahub/person/:name',
    authenticated: true,
    showLayout: true,
    component: PersonComponent,
  },
  {
    name: '404',
    component: () => <Exception exception={404} text="Sorry, the page you visited does not exist" />,
    path: '/exception/404',
    authenticated: false,
    showLayout: true,
  },
  {
    name: '403',
    component: () => (
      <Exception exception={403} text="You are not authorized to access this page. Please login to continue" />
    ),
    path: '/exception/403',
    authenticated: false,
    showLayout: true,
  },
  {
    name: '404',
    component: () => <Exception exception={404} text="Sorry, the page you visited does not exist" />,
    path: '',
    authenticated: false,
    showLayout: false,
  },
];
