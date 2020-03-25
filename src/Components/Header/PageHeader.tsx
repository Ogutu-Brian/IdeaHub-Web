import React from "react";
import { Row, Col, PageHeader as AntPageHeader, Avatar } from "antd";
import { AlignCenterOutlined, UserOutlined } from "@ant-design/icons";

import styles from "./PageHeader.module.scss";

interface Props {
  openSideBar: () => void;
}

const PageHeader: React.FC<Props> = props => (
  <Row className={styles.pageHeader}>
    <AntPageHeader
      title={
        <Row type="flex" gutter={16}>
          <Col>
            <AlignCenterOutlined
              className={styles.title}
              onClick={props.openSideBar}
            />
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
