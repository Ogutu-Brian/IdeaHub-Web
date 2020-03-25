import React from "react";
import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { LandingPage } from "./LandingPage";
import { SideMenu } from "./SideMenu";
import "./App.scss";

const App: React.FC = props => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route component={LandingPage} exact path="/login" />
        <Route component={SideMenu} exact path="/sidemenu" />
      </Switch>
    </Router>
  );
};

export default App;
