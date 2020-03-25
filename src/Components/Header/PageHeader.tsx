import React from "react";
import { Row, Col, PageHeader as AntPageHeader, Avatar } from "antd";
import { AlignCenterOutlined, UserOutlined } from "@ant-design/icons";

import styles from "./PageHeader.module.scss";

const PageHeader: React.FC = () => (
  <Row className={styles.pageHeader}>
    <AntPageHeader
      title={
        <Row type="flex" gutter={16}>
          <Col>
            <AlignCenterOutlined className={styles.title} />
          </Col>
          <Col>Finite Analysis</Col>
        </Row>
      }
      extra={
        <Row>
          <Avatar
            icon={<UserOutlined />}
            style={{ background: "#001529", cursor: "pointer" }}
          />
        </Row>
      }
    />
  </Row>
);

export default PageHeader;
