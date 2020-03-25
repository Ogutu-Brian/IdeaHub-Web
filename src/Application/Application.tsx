import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Row, Col } from "antd";

import { SideMenu } from "../SideMenu";
import { PageHeader } from "../Components";

import styles from "./Application.module.scss";

const Application: React.FC = () => {
  const [showSideBar, openSideBar] = useState<boolean>(true);

  return (
    <Router>
      <Row type="flex" className={styles.application}>
        <Col span={showSideBar ? 4 : 0}>
          <SideMenu />
        </Col>
        <Col span={showSideBar ? 20 : 24}>
          <PageHeader openSideBar={() => openSideBar(!showSideBar)} />
          <Switch>
            <Route exact path="/ideahub/" />
          </Switch>
        </Col>
      </Row>
    </Router>
  );
};

export default Application;
