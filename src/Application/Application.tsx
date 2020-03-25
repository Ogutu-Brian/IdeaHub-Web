import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Row, Col } from "antd";

import { SideMenu } from "../SideMenu";
import { PageHeader } from "../Components";

import styles from "./Application.module.scss";

const Application: React.FC = () => {
  return (
    <Router>
      <Row type="flex" className={styles.application}>
        <Col span={4}>
          <SideMenu />
        </Col>
        <Col span={20}>
          <PageHeader />
          <Switch>
            <Route exact path="/ideahub/" />
          </Switch>
        </Col>
      </Row>
    </Router>
  );
};

export default Application;
