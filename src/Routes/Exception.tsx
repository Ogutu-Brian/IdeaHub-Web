import { Col, Row, Typography } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../Components';

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
    <Row className={styles.exception} style={{ height: '100vh', margin: 'auto', background: '#f1f2f6' }}>
      <Col style={{ textAlign: 'center' }}>
        <img alt="background" width={280} height={320} src={url} />
        <Title style={{ textAlign: 'center' }}>{exception}</Title>
        <Col>
          <Text>{text}</Text>
        </Col>
        <Col style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link to="/">
            <Button type="primary">Back to Home</Button>
          </Link>
        </Col>
      </Col>
    </Row>
  );
};

export default Exception;
