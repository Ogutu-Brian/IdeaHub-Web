import React from "react";
import { Row, Col } from "antd";
import { useMedia } from "react-use";
import { Header, Input } from "../Components";

import { Button } from "../Components";

import styles from "./LandingPage.module.scss";

const LandingPage: React.FC = () => {
  const isMobile: boolean = useMedia("(max-width: 575px)");

  return (
    <>
      <Row className={styles.header}>
        <Header title="IdeaHub" />
      </Row>
      <Row className={styles.landingPage}>
        <Row type="flex" className={styles.contentSection}>
          <Col span={isMobile ? 24 : 12}>
            <Row className={styles.information}>
              <Col className={styles.title}>POOL RESOURCES</Col>
              <Col className={styles.text}>
                Pool human and monetary resources at your comfort
              </Col>
            </Row>
          </Col>
          <Col span={isMobile ? 24 : 12}>
            <Row className={styles.form}>
              <Col style={{ marginBottom: 16 }}>
                <Input placeholder="Email" />
              </Col>
              <Col style={{ marginBottom: 40 }}>
                <Input type="password" placeholder="Password" />
              </Col>
              <Col>
                <Button style={{ width: "100%" }} type="primary" size="large">
                  Join now
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default LandingPage;
