import React from 'react';
import { Row } from 'antd';
import { InputProps } from 'antd/lib/input';

import { BorderLessInput } from '../Components';
import styles from './PostIdea.module.scss';

const PostIdea: React.FC<InputProps> = (props) => {
  return (
    <Row type="flex" className={styles.postIdea}>
      <Row className={styles.profile}>Brian Ogutu</Row>
      <Row>
        <BorderLessInput {...props} className={styles.input} />
      </Row>
    </Row>
  );
};

export default PostIdea;
