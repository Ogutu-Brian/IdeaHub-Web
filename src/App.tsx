import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import { LandingPage } from './LandingPage';
import { Application } from './Application';

import './App.scss';

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Redirect exact from="/" to="/signup" />
        <Route component={() => <LandingPage hasAccount={false} />} exact path="/signup" />
        <Route component={() => <LandingPage hasAccount={true} />} exact path="/login" />
        <Route component={Application} path="/ideahub" />
      </Switch>
    </Router>
  </Provider>
);

export default App;
