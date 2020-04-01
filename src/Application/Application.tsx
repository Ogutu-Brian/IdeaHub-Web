import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import { useMedia } from "react-use";

import { SideMenu } from "../SideMenu";
import { PageHeader } from "../Components";
import { DeviceMeasures } from "../utils";

const Application: React.FC = () => {
  const [showSideBar, openSideBar] = useState<boolean>(true);
  const [showDrawer, openDrawer] = useState<boolean>(false);
  const { Content } = Layout;
  const isMobile: boolean = useMedia(DeviceMeasures.MOBILE);

  return (
    <Router>
      <Layout>
        <SideMenu
          collapsed={!showSideBar}
          openDrawer={showDrawer}
          closeDrawer={() => openDrawer(false)}
        />
        <Layout>
          <PageHeader
            openSideBar={
              !isMobile
                ? () => openSideBar(!showSideBar)
                : () => openDrawer(true)
            }
          />
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
