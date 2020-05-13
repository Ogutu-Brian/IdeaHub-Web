import React from 'react';
import { Row, Col } from 'antd';

import { Button } from '../../Components';

import styles from './Footer.module.scss';

interface Props {
  onCancel: () => void;
  onOk: () => void;
}

const Footer: React.FC<Props> = (props) => {
  const { onCancel, onOk } = props;

  return (
    <Row type="flex" className={styles.footer}>
      <Col>
        <Button size="large" type="primary" className={styles.footer} onClick={onOk}>
          Post Idea
        </Button>
      </Col>
      <Col className={styles.cancel} onClick={onCancel}>
        Cancel
      </Col>
    </Row>
  );
};

const MobileFooter: React.FC<Props> = (props) => {
  const { onCancel, onOk } = props;

  return (
    <>
      <Col className={styles.mobileFooter}>
        <Button type="primary" className={styles.button} onClick={onOk} size="large">
          Post Idea
        </Button>
      </Col>
      <Col>
        <Button type="danger" className={styles.button} onClick={onCancel} size="large">
          Cancel
        </Button>
      </Col>
    </>
  );
};

export { MobileFooter };

export default Footer;
