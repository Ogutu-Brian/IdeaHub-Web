import React from 'react';
import { Row, Col } from 'antd';

import { coverImage, profileImage } from '../MockData';
import styles from './MyProfile.module.scss';
import { Button, Modal } from '../Components';
import { Ideas } from '../Ideas';
import { ModalHeader, ProfileForm } from './Components';

const MyProfile: React.FC = () => {
  return (
    <Row>
      <Modal title={<ModalHeader />} centered={true} closeIcon={null} className={styles.modal} visible footer={null}>
        <ProfileForm />
      </Modal>
      <Row>
        <Col lg={6} md={4} sm={0} />
        <Col lg={12} md={16} sm={24} className={styles.myProfile}>
          <Row className={styles.coverImageContainer}>
            <img src={coverImage} alt="Cover" className={styles.coverImage} />
          </Row>
          <Row type="flex" justify="space-between" className={styles.profileImgContainer}>
            <Col>
              <div className={styles.imageContainer}>
                <img src={profileImage} alt="Cover" className={styles.image} />
              </div>
            </Col>
            <Col className={styles.editProfileButton}>
              <Button size="large">Edit profile</Button>
            </Col>
          </Row>
          <Row className={styles.nameContainer}>
            <Row className={styles.name}>Brian Ogutu</Row>
            <Row>Software Engineer Tech Lead</Row>
          </Row>
        </Col>
        <Col lg={6} md={4} sm={0} />
      </Row>
      <Row className={styles.ideasContainer}>
        <Ideas hidePostIdea={true} />
      </Row>
    </Row>
  );
};

export default MyProfile;
