import React, { useState, ChangeEvent } from 'react';
import { Row, Col } from 'antd';
import { useMedia } from 'react-use';

import { Button } from '../Components';
import { DeviceMeasures } from '../utils';
import { Input, PasswordInput, LandingPageHeader } from '../Components';
import { signUpUser } from '../services';

import styles from './LandingPage.module.scss';
import { SignUpData } from '../services/authentication/interfaces';

interface Props {
  hasAccount: boolean;
}

const LandingPage: React.FC<Props> = (props) => {
  const { hasAccount } = props;
  const isMobile: boolean = useMedia(DeviceMeasures.MOBILE);
  const [signUpData, setSignUpData] = useState<any>();

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.persist();
    setSignUpData((signUpData: SignUpData) =>
      setSignUpData({
        ...signUpData,
        [e.target.name]: e.target.value,
      }),
    );
  };

  const signUp = (): void => {
    signUpUser(signUpData).then((response) => {});
  };

  const logIn = (): void => {};

  return (
    <>
      <LandingPageHeader hasAccount={hasAccount} hasHeaderButtons={true} />
      <Row className={styles.landingPage}>
        <Row type="flex" className={styles.contentSection}>
          <Col lg={12} md={12} sm={24}>
            <Row className={styles.information}>
              <Col className={styles.title}>POOL RESOURCES</Col>
              <Col className={styles.text}>Pool human and monetary resources at your comfort</Col>
            </Row>
          </Col>
          <Col span={isMobile ? 24 : 12}>
            <Row className={isMobile ? '' : styles.form}>
              {!hasAccount && (
                <Col style={{ marginBottom: 16 }}>
                  <Input placeholder="First name" name="firstName" onChange={onChange} />
                </Col>
              )}
              {!hasAccount && (
                <Col style={{ marginBottom: 16 }}>
                  <Input placeholder="Last name" name="lastName" onChange={onChange} />
                </Col>
              )}
              <Col style={{ marginBottom: 16 }}>
                <Input placeholder="Email" name="email" onChange={onChange} />
              </Col>
              {!hasAccount && (
                <Col style={{ marginBottom: 16 }}>
                  <PasswordInput placeholder="Password" name="password" onChange={onChange} />
                </Col>
              )}
              <Col style={{ marginBottom: 40 }}>
                <PasswordInput placeholder="Confirm password" name="confirmPassword" onChange={onChange} />
              </Col>
              <Col>
                <Button style={{ width: '100%' }} type="primary" size="large" onClick={hasAccount ? logIn : signUp}>
                  {hasAccount ? 'Log In' : 'Sign Up'}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default LandingPage;
