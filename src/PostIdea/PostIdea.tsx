import React from 'react';
import { Row, Col, Avatar } from 'antd';
import { InputProps } from 'antd/lib/input';

import { BorderLessInput } from '../Components';
import { placeHolderImage } from '../MockData/mockdata';

import styles from './PostIdea.module.scss';

const PostIdea: React.FC<InputProps> = (props) => {
  return (
    <Row className={styles.postIdea}>
      <Row type="flex">
        <Col>
          <Avatar src={placeHolderImage} />
        </Col>
        <Col className={styles.name}>Brian Ogutu</Col>
      </Row>
      <Row>
        <BorderLessInput {...props} className={styles.input} />
      </Row>
    </Row>
  );
};

export default PostIdea;
