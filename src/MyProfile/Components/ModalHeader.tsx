import React from 'react';
import { Row, Col } from 'antd';
import { Button } from '../../Components';

import styles from './ModalHeader.module.scss';

interface Props {
  onSave: () => void;
  onCancel: () => void;
}

const ModalHeader: React.FC<Props> = (props) => {
  const { onSave, onCancel } = props;

  return (
    <Row type="flex" justify="space-between">
      <Col>
        <Row type="flex">
          <Col>
            <div className={styles.closeIcon} onClick={onCancel}>
              &#10005;
            </div>
          </Col>
          <Col className={styles.headerText}>Edit profile</Col>
        </Row>
      </Col>
      <Col>
        <Button type="primary" size="small" onClick={onSave}>
          Save
        </Button>
      </Col>
    </Row>
  );
};

export default ModalHeader;
