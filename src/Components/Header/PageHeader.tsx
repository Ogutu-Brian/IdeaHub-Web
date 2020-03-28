import React from "react";
import { Row, Col, Avatar, Layout } from "antd";
import { AlignCenterOutlined, UserOutlined } from "@ant-design/icons";

import styles from "./PageHeader.module.scss";

interface Props {
  openSideBar: () => void;
}

const { Header } = Layout;

const PageHeader: React.FC<Props> = props => (
  <Header className={styles.pageHeader}>
    <Row type="flex" justify="space-between">
      <Col>
        <AlignCenterOutlined
          style={{ cursor: "pointer", marginLeft: "-32px" }}
          onClick={props.openSideBar}
        />
      </Col>
      <Col className={styles.avatar}>
        <Avatar icon={<UserOutlined />} className={styles.icon} />
      </Col>
    </Row>
  </Header>
);

export default PageHeader;
