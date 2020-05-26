import React, { useState } from 'react';
import { Row, Col } from 'antd';

import { LandingPageHeader, Input, Button } from '../Components';

import styles from './CodeVerification.module.scss';

const CodeVerification: React.FC = () => {
  const [verificationCode, setVerificationCode] = useState<string>('');

  return (
    <Row className={styles.container}>
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
              <Input placeholder="Enter code" />
            </Col>
          </Row>
          <Row className={styles.resendMail}>Send email again</Row>
          <Row type="flex" className={styles.buttonsRow}>
            <Col>
              <Row type="flex" gutter={8} style={{ flexWrap: 'nowrap' }}>
                <Col className={styles.buttonColumn}>
                  <Button type="default" className={styles.button}>
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

export default CodeVerification;
