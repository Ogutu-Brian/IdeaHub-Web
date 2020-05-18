import React from 'react';
import { Row, Col } from 'antd';

import { Ideas } from '../Ideas';
import { coverImage, profileImage } from '../MockData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import styles from './Profile.module.scss';
import { Button } from '../Components';

const Profile: React.FC = () => {
  return (
    <Row>
      <Row>
        <Col lg={6} md={4} sm={0} />
        <Col lg={12} sm={24} className={styles.profileContainer}>
          <Row className={styles.coverImageContainer}>
            <img src={coverImage} alt="Cover" className={styles.coverImage} />
          </Row>
          <Row type="flex" justify="space-between" className={styles.profileImage}>
            <Col>
              <div className={styles.imageContainer}>
                <img src={profileImage} className={styles.image} alt="Cover" />
              </div>
            </Col>
          </Row>
          <Row className={styles.nameContainer}>
            <Row type="flex" justify="space-between">
              <Col className={styles.name}>Brian Ogutu</Col>
              <Col className={styles.iconsContainer}>
                <Row type="flex" gutter={8}>
                  <Col>
                    <div className={styles.message}>
                      <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    </div>
                  </Col>
                  <Col>
                    <Button>Follow</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>Software Engineer Tech Lead</Row>
          </Row>
        </Col>
        <Col lg={6} md={4} sm={0} />
      </Row>
      <Row>
        <Ideas hidePostIdea={true} />
      </Row>
    </Row>
  );
};

export default Profile;
