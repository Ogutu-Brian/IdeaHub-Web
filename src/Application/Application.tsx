import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import { SideMenu } from "../SideMenu";
import { PageHeader } from "../Components";

const Application: React.FC = props => {
  const [showSideBar, openSideBar] = useState<boolean>(true);
  const { Content } = Layout;

  return (
    <Router>
      <Layout>
        <SideMenu collapsed={!showSideBar} />
        <Layout>
          <PageHeader openSideBar={() => openSideBar(!showSideBar)} />
          <Content>
            <Switch>
              <Route exact path="/ideahub/" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default Application;
