import React from 'react';
import { Row, Col } from 'antd';

import { Idea } from '../Ideas/components';
import { Idea as IdeaInterface } from '../interfaces';
import { MockData } from '../MockData';

import styles from './Ideas.module.scss';
import { PostIdea } from '../PostIdea';

const Ideas: React.FC = () => (
  <Row className={styles.ideas}>
    <Row>
      <Col lg={4} md={4} sm={0} />
      <Col lg={16} md={16} sm={24} className={styles.postIdea}>
        <PostIdea />
      </Col>
      <Col lg={4} md={4} sm={0} />
    </Row>
    {MockData.Ideas.map((idea: IdeaInterface, index: number) => (
      <Col className={styles.ideaCard} key={index}>
        <Idea idea={idea} />
      </Col>
    ))}
  </Row>
);

export default Ideas;
