import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
import { useMedia } from "react-use";

import { SideMenu } from "../SideMenu";
import { PageHeader } from "../Components";
import { DeviceMeasures } from "../utils";
import { Ideas } from "../Ideas";
import { Footer } from "../Components/Footer";

const Application: React.FC<any> = props => {
  const [showSideBar, openSideBar] = useState<boolean>(true);
  const [showDrawer, openDrawer] = useState<boolean>(false);
  const { Content } = Layout;
  const isMobile: boolean = useMedia(DeviceMeasures.MOBILE);
  const path: string = "/ideahub";

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
              <Redirect exact from={path} to={`${path}/ideas`} />
              <Route exact path={`${path}/ideas`} component={Ideas} />
            </Switch>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Router>
  );
};

export default Application;
