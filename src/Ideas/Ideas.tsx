import React from 'react';
import { Row, Col } from 'antd';

import { Idea } from '../Ideas/components';
import { Idea as IdeaInterface } from '../interfaces';
import { MockData } from '../MockData';

import styles from './Ideas.module.scss';

const Ideas: React.FC = () => (
  <Row className={styles.ideas}>
    {MockData.Ideas.map((idea: IdeaInterface, index: number) => (
      <Col style={{ paddingBottom: '16px' }} key={index}>
        <Idea idea={idea} />
      </Col>
    ))}
  </Row>
);

export default Ideas;
