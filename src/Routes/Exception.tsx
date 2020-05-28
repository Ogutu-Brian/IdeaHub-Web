import { Button, Col, Row, Typography } from 'antd';
import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import styles from './exceptions.module.scss';

const { Title, Text } = Typography;

interface Props {
  exception: number;
  text: string;
}
const Exception: FC<Props> = (props) => {
  const { exception, text } = props;
  const url = `${process.env.PUBLIC_URL}/not.png`;
  return (
    <Row className={styles.exception} style={{ height: '100%' }}>
      <Col style={{ textAlign: 'center' }}>
        <img alt="background" width={280} height={320} src={url} />
        <Title style={{ textAlign: 'center' }}>{exception}</Title>
        <Col>
          <Text>{text}</Text>
        </Col>
        <Col style={{ textAlign: 'center' }}>
          <Link to="/">
            <Button style={{ background: '#0050c8', marginTop: 8, borderRadius: 8 }} type="primary">
              Back to Home
            </Button>
          </Link>
        </Col>
      </Col>
    </Row>
  );
};

export default Exception;
