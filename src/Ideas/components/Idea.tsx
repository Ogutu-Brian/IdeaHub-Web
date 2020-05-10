import React from 'react';
import { Row, Col, Avatar } from 'antd';
import { CardProps } from 'antd/lib/card';
import { faComments, faThumbsUp, faShareSquare } from '@fortawesome/free-regular-svg-icons';

import { Idea as IdeaInterface } from '../../interfaces';
import { Icon } from '../../Components';

import styles from './Idea.module.scss';

interface Props extends CardProps {
  idea: IdeaInterface;
}

const Idea: React.FC<Props> = (props) => {
  const { idea } = props;
  return (
    <Row>
      <Col lg={4} md={4} sm={0} />
      <Col lg={16} md={16} sm={24}>
        <Row type="flex" className={styles.idea}>
          <Col span={2}>
            <Avatar src={idea.author.avatar} />
          </Col>
          <Col span={22} className={styles.content}>
            <Row type="flex" style={{ paddingRight: 8 }}>
              <Col className={styles.authorName} span={20} style={{ paddingBottom: 8 }}>
                {idea.author.name}
              </Col>
              <Col style={{ paddingBottom: '8px' }}>{idea.text}</Col>
              {idea.image && (
                <Col style={{ paddingBottom: 8 }}>
                  <img src={idea.image} style={{ width: '100%', zIndex: 0 }} alt="Idea Doc" />
                </Col>
              )}
              <Col style={{ width: '100%', padding: 8 }}>
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
      <Col lg={4} md={4} sm={0} />
    </Row>
  );
};

export default Idea;
