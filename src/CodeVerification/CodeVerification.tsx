import React, { useState, ChangeEvent, Dispatch } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';

import { LandingPageHeader, Input, Button } from '../Components';
import { Modal } from './Components';

import styles from './CodeVerification.module.scss';
import { Store } from '../store/interfaces';

const CodeVerification: React.FC = () => {
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.persist();
    setVerificationCode(e.target.value);
  };

  return (
    <Row className={styles.container}>
      <Modal visible={modalVisible} onCancel={() => setModalVisible(false)} onOk={() => setModalVisible(false)} />
      <LandingPageHeader hasHeaderButtons={false} hasAccount={false} />
      <Row type="flex" className={styles.codeVerification} justify="space-around">
        <Row className={styles.card}>
          <Row className={styles.title}>Enter the code from your email</Row>
          <Row className={styles.text}>
            Let us know that this email address belongs to you. Enter the code from the email sent to
            <span className={styles.mail}> test@gmail.com</span>
          </Row>
          <Row className={styles.inputRow} type="flex">
            <Col lg={8}>
              <Input placeholder="Enter code" onChange={onChange} />
            </Col>
          </Row>
          <Row className={styles.resendMail}>Send email again</Row>
          <Row type="flex" className={styles.buttonsRow}>
            <Col>
              <Row type="flex" gutter={8} style={{ flexWrap: 'nowrap' }}>
                <Col className={styles.buttonColumn}>
                  <Button type="default" className={styles.button} onClick={() => setModalVisible(true)}>
                    Update contact info
                  </Button>
                </Col>
                <Col className={styles.buttonColumn}>
                  <Button
                    type={verificationCode ? 'primary' : 'default'}
                    className={!verificationCode ? styles.disabledButton : ''}
                    disabled={!verificationCode ? true : false}
                  >
                    Continue
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
      </Row>
    </Row>
  );
};

const mapStateToProps = (state: Store) => ({
  signUp: state.signUp,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CodeVerification);
