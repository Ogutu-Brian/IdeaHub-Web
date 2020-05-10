import React, { useState } from 'react';
import { Row, Col, Avatar } from 'antd';
import { InputProps } from 'antd/lib/input';
import { useMedia } from 'react-use';

import { BorderLessInput, Modal, Input, TextArea } from '../Components';
import { placeHolderImage } from '../MockData/mockdata';
import { DeviceMeasures } from '../utils';
import { Footer, MobileFooter } from './Components';

import styles from './PostIdea.module.scss';

const PostIdea: React.FC<InputProps> = (props) => {
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
      <Row type="flex">
        <Col>
          <Avatar src={placeHolderImage} />
        </Col>
        <Col className={styles.name}>Brian Ogutu</Col>
      </Row>
      <Row>
        <BorderLessInput onClick={() => openModal(true)} className={styles.input} {...props} />
      </Row>
    </Row>
  );
};

export default PostIdea;
