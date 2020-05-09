import React from 'react';
import { Row, Col, Avatar, Layout } from 'antd';
import { AlignCenterOutlined, UserOutlined } from '@ant-design/icons';

import { Search } from '../../Components';

import styles from './PageHeader.module.scss';

interface Props {
  openSideBar: () => void;
  isMobile: boolean;
  collapsed: boolean;
}

const { Header } = Layout;

const PageHeader: React.FC<Props> = (props) => {
  const { isMobile, collapsed } = props;

  return (
    <Header className={styles.pageHeader}>
      <Row type="flex" justify="space-between">
        <Col>
          <Row type="flex">
            <Col>
              <AlignCenterOutlined style={{ cursor: 'pointer', marginLeft: '-32px' }} onClick={props.openSideBar} />
            </Col>
            <Col>
              <Search />
            </Col>
          </Row>
        </Col>
        <Col className={styles.avatar} style={{ marginRight: !collapsed && !isMobile ? '12rem' : '' }}>
          <Avatar icon={<UserOutlined />} className={styles.icon} />
        </Col>
      </Row>
    </Header>
  );
};

export default PageHeader;
