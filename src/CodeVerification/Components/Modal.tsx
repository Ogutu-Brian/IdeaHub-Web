import React from 'react';
import { Row, Col } from 'antd';
import { ModalProps } from 'antd/lib/modal';

import { Modal, Button, Input } from '../../Components';

import styles from './Modal.module.scss';

const VerificationModal: React.FC<ModalProps> = (props) => {
  const { onOk, onCancel } = props;

  return (
    <Modal title="Add email address" footer={null} {...props}>
      <Row>
        <Input placeholder="New email address" />
      </Row>
      <Row type="flex" style={{ flexDirection: 'row-reverse', paddingTop: '32px' }} gutter={8}>
        <Col>
          <Button type="primary" onClick={onOk}>
            Add
          </Button>
        </Col>
        <Col>
          <Button className={styles.button} onClick={onCancel}>
            Cancel
          </Button>
        </Col>
      </Row>
    </Modal>
  );
};

export default VerificationModal;
