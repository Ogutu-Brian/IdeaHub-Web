import React from 'react';
import { Row, Col } from 'antd';
import { Button } from '../../Components';

import styles from './ModalHeader.module.scss';

const ModalHeader: React.FC = () => {
  return (
    <Row type="flex" justify="space-between">
      <Col>
        <Row type="flex">
          <Col>
            <div className={styles.closeIcon}>&#10005;</div>
          </Col>
          <Col className={styles.headerText}>Edit profile</Col>
        </Row>
      </Col>
      <Col>
        <Button type="primary" size="small">
          Save
        </Button>
      </Col>
    </Row>
  );
};

export default ModalHeader;
