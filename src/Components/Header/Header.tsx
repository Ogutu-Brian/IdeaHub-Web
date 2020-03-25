import React from "react";
import { PageHeader, Row, Col } from "antd";

import { Button } from "../Button";
import { Props, JoinAndSignInProps } from "./interfaces";

import styles from "./Header.module.scss";

const JoinAndSignInButtons: React.FC<JoinAndSignInProps> = props => (
  <Row type="flex" gutter={24}>
    <Col>
      <Button size="large" onClick={props.joinNow}>
        Join now
      </Button>
    </Col>
    <Col>
      <Button type="primary" size="large" onClick={props.signIn}>
        Sign In
      </Button>
    </Col>
  </Row>
);

const Header: React.FC<Props> = props => (
  <PageHeader
    className={styles.header}
    {...props}
    extra={
      <JoinAndSignInButtons joinNow={props.joinNow} signIn={props.signIn} />
    }
  />
);

export default Header;
