import React from "react";
import { PageHeader, Row, Col } from "antd";
import { PageHeaderProps } from "antd/lib/page-header";

import { Button } from "../Button";
import styles from "./Header.module.scss";

const JoinAndSignInButtons: React.FC = () => (
  <Row type="flex" gutter={24}>
    <Col>
      <Button className={styles.joinButton} size="large">
        Join now
      </Button>
    </Col>
    <Col>
      <Button type="primary" size="large">
        Sign In
      </Button>
    </Col>
  </Row>
);

const Header: React.FC<PageHeaderProps> = props => (
  <PageHeader
    className={styles.header}
    {...props}
    extra={<JoinAndSignInButtons />}
  />
);

export default Header;
