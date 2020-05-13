import React from 'react';
import { Row } from 'antd';

import { Input, TextArea } from '../../Components';
import { profileImage, coverImage } from '../../MockData';

import styles from './ProfileForm.module.scss';

const ProfileForm: React.FC = () => {
  return (
    <Row className={styles.profileContainer}>
      <Row>
        <Row className={styles.coverPhotoContainer}>
          <img src={coverImage} alt="Cover" className={styles.image} />
        </Row>
        <Row className={styles.profilePhotoContainer}>
          <img src={profileImage} alt="Profile" className={styles.image} />
        </Row>
      </Row>
      <Row>
        <Input placeholder="Name" />
      </Row>
      <Row className={styles.input}>
        <TextArea placeholder="Bio" />
      </Row>
      <Row className={styles.input}>
        <Input placeholder="Location" />
      </Row>
      <Row className={styles.input}>
        <Input placeholder="Website" />
      </Row>
      <Row className={styles.input}>
        <Input placeholder="Birth date" />
      </Row>
    </Row>
  );
};

export default ProfileForm;
