import React, { useState, ChangeEvent, Dispatch, useEffect } from 'react';
import { Row, Col, Form } from 'antd';
import { connect } from 'react-redux';

import { LandingPageHeader, Input, Button } from '../Components';
import { Modal } from './Components';
import { Store } from '../store/interfaces';
import { SignUp } from '../store/signUp/actions/interfaces';
import { verifyUser } from '../services/authentication/authentication';
import { signUpSuccess } from '../store/signUp/actions';
import { SIGN_UP_STAGES } from '../utils';

import styles from './CodeVerification.module.scss';

interface Props {
  signUpData: SignUp;
  signUpUserSuccess: (data: SignUp) => void;
  history: any;
}

const CodeVerification: React.FC<Props> = (props) => {
  const { signUpData, history, signUpUserSuccess } = props;
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [continueButtonLoading, setContinueButtonLoading] = useState<boolean>(false);
  const [verificationErrored, setVerificationErrored] = useState<boolean>(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.persist();
    setVerificationCode(e.target.value);
    setVerificationErrored(false);
  };

  const onSubmitCode = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    setContinueButtonLoading(true);

    verifyUser({
      email: signUpData.email,
      verificationCode: verificationCode,
    })
      .then((response: any) => {
        setContinueButtonLoading(false);
        setVerificationErrored(false);
        signUpUserSuccess({
          ...signUpData,
          stage: SIGN_UP_STAGES.DONE,
        });
      })
      .catch((error) => {
        setContinueButtonLoading(false);
        setVerificationErrored(true);
      });
  };

  useEffect(() => {
    const redirectionRoute: string = signUpData.stage === SIGN_UP_STAGES.VERIFY ? '/signup' : '/ideahub';

    if (!signUpData.email || signUpData.stage !== SIGN_UP_STAGES.VERIFY) {
      history.push(redirectionRoute);
    }
  }, [signUpData, history]);

  return (
    <Row className={styles.container}>
      <Modal visible={modalVisible} onCancel={() => setModalVisible(false)} onOk={() => setModalVisible(false)} />
      <LandingPageHeader hasHeaderButtons={false} hasAccount={false} />
      <Row type="flex" className={styles.codeVerification} justify="space-around">
        <Row className={styles.card}>
          <Row className={styles.title}>Enter the code from your email</Row>
          <Row className={styles.text}>
            Let us know that this email address belongs to you. Enter the code from the email sent to
            <span className={styles.mail}>{` ${signUpData.email}`}</span>
          </Row>
          <Row className={styles.inputRow} type="flex">
            <Col lg={8}>
              <Form.Item
                validateStatus={verificationErrored ? 'error' : ''}
                help={verificationErrored ? 'Sorry the code is not valid' : ''}
              >
                <Input placeholder="Enter code" onChange={onChange} />
              </Form.Item>
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
                    onClick={onSubmitCode}
                    loading={continueButtonLoading}
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
  signUpData: state.signUp,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  signUpUserSuccess: (data: SignUp): void => dispatch(signUpSuccess(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CodeVerification);
