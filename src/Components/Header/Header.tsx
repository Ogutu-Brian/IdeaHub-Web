import React from "react";
import { PageHeader, Row, Col } from "antd";
import { PageHeaderProps } from "antd/lib/page-header";

import { Button } from "../Button";
import styles from "./Header.module.scss";

interface JoinAndSignInProps {
  joinNow: () => void;
  signIn: () => void;
}

interface Props extends PageHeaderProps, JoinAndSignInProps {}

const JoinAndSignInButtons: React.FC<JoinAndSignInProps> = props => (
  <Row type="flex" gutter={24}>
    <Col>
      <Button
        className={styles.joinButton}
        size="large"
        onClick={props.joinNow}
      >
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
