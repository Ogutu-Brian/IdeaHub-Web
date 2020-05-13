import React from 'react';
import { Row, Col } from 'antd';

import { Idea } from '../Ideas/components';
import { Idea as IdeaInterface } from '../interfaces';
import { MockData } from '../MockData';

import styles from './Ideas.module.scss';
import { PostIdea } from '../PostIdea';

interface Props {
  hidePostIdea?: boolean;
}

const Ideas: React.FC<Props> = (props) => {
  const { hidePostIdea } = props;

  return (
    <Row className={styles.ideas}>
      {!hidePostIdea && (
        <Row>
          <Col lg={6} md={4} sm={0} />
          <Col lg={12} md={16} sm={24} className={styles.postIdea}>
            <PostIdea />
          </Col>
          <Col lg={6} md={4} sm={0} />
        </Row>
      )}
      {MockData.Ideas.map((idea: IdeaInterface, index: number) => (
        <Col className={styles.ideaCard} key={index}>
          <Idea idea={idea} />
        </Col>
      ))}
    </Row>
  );
};
export default Ideas;
