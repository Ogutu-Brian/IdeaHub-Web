import React, { useState } from 'react';
import { Row, Col, Avatar } from 'antd';
import { useMedia } from 'react-use';

import { Modal, Input, TextArea } from '../Components';
import { placeHolderImage } from '../MockData/mockdata';
import { DeviceMeasures } from '../utils';
import { Footer, MobileFooter } from './Components';

import styles from './PostIdea.module.scss';

const PostIdea: React.FC = () => {
  const isMobile: boolean = useMedia(DeviceMeasures.MOBILE);
  const [modalOpen, openModal] = useState<boolean>(false);
  const cancel = (): void => openModal(false);
  const postIdea = (): void => openModal(false);

  return (
    <Row className={styles.postIdea}>
      <Modal
        visible={modalOpen}
        title="Post Idea"
        onCancel={cancel}
        footer={!isMobile ? <Footer onCancel={cancel} onOk={postIdea} /> : null}
      >
        <Row>
          <Col className={styles.inputField}>
            <Input placeholder="Title" />
          </Col>
          <Col className={styles.inputField}>
            <TextArea autoSize={true} placeholder="Content" />
          </Col>
          {isMobile && <MobileFooter onCancel={cancel} onOk={postIdea} />}
        </Row>
      </Modal>
      <Row type="flex" onClick={() => openModal(true)} className={styles.avatarSection}>
        <Col>
          <Avatar src={placeHolderImage} />
        </Col>
        <Col className={styles.name}>Brian Ogutu</Col>
      </Row>
      <Row className={styles.placeHolderText} onClick={() => openModal(true)}>
        What is your idea?
      </Row>
    </Row>
  );
};

export default PostIdea;
