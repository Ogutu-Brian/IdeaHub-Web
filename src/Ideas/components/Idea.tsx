import React from 'react';
import { Row, Col, Avatar } from 'antd';
import { CardProps } from 'antd/lib/card';
import { faComments, faThumbsUp, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Idea as IdeaInterface } from '../../interfaces';
import { Icon } from '../../Components';

import styles from './Idea.module.scss';

interface Props extends CardProps, RouteComponentProps {
  idea: IdeaInterface;
}

const Idea: React.FC<Props> = (props) => {
  const { idea } = props;

  return (
    <Row>
      <Col lg={6} md={4} sm={0} />
      <Col lg={12} md={16} sm={24}>
        <Row type="flex" className={styles.idea}>
          <Col span={2}>
            <Avatar src={idea.author.avatar} />
          </Col>
          <Col span={22} className={styles.content}>
            <Row type="flex" className={styles.contentItems}>
              <Col className={styles.authorName} span={20}>
                {idea.author.name}
              </Col>
              <Col className={styles.ideaText}>{idea.text}</Col>
              {idea.image && (
                <Col className={styles.ideaImageContainer}>
                  <img src={idea.image} className={styles.ideaImage} alt="Idea Doc" />
                </Col>
              )}
              <Col className={styles.footerItems}>
                <Row type="flex" gutter={4} justify="space-between">
                  <Col>
                    <Icon icon={faComments} size="lg" />
                  </Col>
                  <Col>
                    <Icon icon={faThumbsUp} size="lg" />
                  </Col>
                  <Col>
                    <Icon icon={faShareSquare} size="lg" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col lg={6} md={4} sm={0} />
    </Row>
  );
};

export default withRouter(Idea);
