import React, { useState, ChangeEvent, Dispatch, useEffect } from 'react';
import { Row, Col, Form } from 'antd';
import { useMedia } from 'react-use';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import humps from 'humps';
import { get } from 'lodash';
import emailValidator from 'email-validator';

import { Button } from '../Components';
import { DeviceMeasures, SIGN_UP_STAGES, allFieldsEmpty, allFieldsFilled } from '../utils';
import { Input, PasswordInput, LandingPageHeader } from '../Components';
import { signUpUser } from '../services';
import { FieldsData } from '../services/authentication/interfaces';
import { GroupSvg } from '../assets';
import { Store } from '../store/interfaces';
import { SignUp } from '../store/signUp/actions/interfaces';
import { signUpSuccess, signUpError } from '../store/signUp/actions';

import styles from './LandingPage.module.scss';

interface Props {
  hasAccount: boolean;
  signUpUserSuccess: (data: SignUp) => void;
  signUpStore: SignUp;
  signUpUserError: (error: any) => void;
}

const LandingPage: React.FC<Props> = (props) => {
  const { hasAccount, signUpUserSuccess, signUpStore, signUpUserError } = props;
  const isMobile: boolean = useMedia(DeviceMeasures.MOBILE);
  const [loadingButton, setLoadingButton] = useState<boolean>(false);
  const [fieldsData, setFieldsData] = useState<FieldsData>({});
  let history = useHistory();
  const verifyPageRoute: string = '/verify';
  const [fieldErrors, setFieldErrors] = useState<FieldsData>({});
  const [disableSubmitButton, setDisableSubmitButton] = useState<boolean>(true);

  useEffect(() => {
    if (signUpStore.stage === SIGN_UP_STAGES.VERIFY) {
      history.push(verifyPageRoute);
    }
  }, [signUpStore, history]);

  useEffect(() => {
    const formFilled: boolean = allFieldsFilled(
      !hasAccount ? ['firstName', 'lastName', 'email', 'password', 'confirmPassword'] : ['email', 'password'],
      fieldsData,
    );
    const nillErrors: boolean = allFieldsEmpty(fieldErrors);

    setDisableSubmitButton(!(formFilled && nillErrors));
  }, [fieldsData, fieldErrors, hasAccount]);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.persist();
    if (e.target.value.length) {
      setFieldErrors((errors: FieldsData) => ({
        ...errors,
        [e.target.name]: '',
      }));
    }

    setFieldsData((fieldsData: FieldsData) => ({
      ...fieldsData,
      [e.target.name]: e.target.value,
    }));
  };

  const signUp = (): void => {
    setLoadingButton(true);

    signUpUser(fieldsData)
      .then((response): void => {
        setLoadingButton(false);

        signUpUserSuccess({
          firstName: fieldsData.firstName,
          lastName: fieldsData.lastName,
          email: fieldsData.email,
          stage: SIGN_UP_STAGES.VERIFY,
        });
      })
      .catch((error) => {
        setLoadingButton(false);
        setFieldErrors((errors: any) => ({
          ...errors,
          email: error.response.data.user[0],
        }));
        signUpUserError(humps.camelizeKeys(error.response.data));
      });
  };

  const handlePasswordFields = (fieldName: 'password' | 'confirmPassword'): void => {
    const confirmPassword: string | undefined = fieldsData.confirmPassword;
    const password: string | undefined = fieldsData.password;
    const confirmPasswordMessage: string = 'Password and confirm password do not match';

    switch (fieldName) {
      case 'password':
        if (!password) {
          setFieldErrors((errors: any) => ({
            ...errors,
            password: 'Please enter password',
          }));
        } else if (!confirmPassword) {
          setFieldErrors((errors: any) => ({
            ...errors,
            confirmPassword: 'Please confirm password',
          }));
        } else if (confirmPassword && confirmPassword !== password) {
          setFieldErrors((errors: any) => ({
            ...errors,
            confirmPassword: confirmPasswordMessage,
          }));
        }
        return;
      case 'confirmPassword':
        if (!confirmPassword) {
          setFieldErrors((errors: any) => ({
            ...errors,
            confirmPassword: 'Please confirm password',
          }));
        }
        if (confirmPassword && confirmPassword !== password) {
          setFieldErrors((errors: any) => ({
            ...errors,
            confirmPassword: confirmPasswordMessage,
          }));
        }
        return;
    }
  };

  const onBlur = (fieldName: string, optionalName?: string): void => {
    if (!hasAccount && (fieldName === 'confirmPassword' || fieldName === 'password')) {
      handlePasswordFields(fieldName);
    } else if (fieldName === 'email') {
      const email: string | undefined = fieldsData.email;

      if (email && emailValidator.validate(email)) {
        setFieldErrors((errors: any) => ({
          ...errors,
          email: '',
        }));
      } else {
        setFieldErrors((errors: any) => ({
          ...errors,
          email: 'Please enter a valid email',
        }));
      }
    } else if (!get(fieldsData, fieldName)) {
      setFieldErrors((errors: FieldsData) => ({
        ...errors,
        [fieldName]: `Please enter ${!optionalName ? fieldName.toLowerCase() : optionalName.toLowerCase()}`,
      }));
    } else {
      setFieldErrors((errors: FieldsData) => ({
        ...errors,
        [fieldName]: '',
      }));
    }
  };

  const logIn = (): void => {
    const redirectRoute: string = '/ideahub';

    history.push(redirectRoute);
  };

  return (
    <>
      <LandingPageHeader hasAccount={hasAccount} hasHeaderButtons={true} />
      <Row className={styles.landingPage}>
        <Row type="flex" className={styles.contentSection}>
          <Col lg={12} md={12} sm={24}>
            <Row className={styles.information}>
              <Col className={styles.title}>POOL RESOURCES</Col>
              <Col className={styles.text}>Pool human and monetary resources at your comfort</Col>
              <Col>
                <Row type="flex">
                  <Col>
                    <img className={styles.groupSvg} src={GroupSvg} alt="Group Svg" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={isMobile ? 24 : 12}>
            <Row className={isMobile ? '' : styles.form}>
              <Form>
                {!hasAccount && (
                  <Col style={{ marginBottom: 16 }}>
                    <Form.Item validateStatus={fieldErrors.firstName ? 'error' : ''} help={fieldErrors.firstName}>
                      <Input
                        placeholder="First name"
                        name="firstName"
                        onChange={onChange}
                        onBlur={() => onBlur('firstName', 'first name')}
                      />
                    </Form.Item>
                  </Col>
                )}
                {!hasAccount && (
                  <Col style={{ marginBottom: 16 }}>
                    <Form.Item validateStatus={fieldErrors.lastName ? 'error' : ''} help={fieldErrors.lastName}>
                      <Input
                        placeholder="Last name"
                        name="lastName"
                        onChange={onChange}
                        onBlur={() => onBlur('lastName', 'last name')}
                      />
                    </Form.Item>
                  </Col>
                )}
                <Col style={{ marginBottom: 16 }}>
                  <Form.Item validateStatus={fieldErrors.email ? 'error' : ''} help={fieldErrors.email}>
                    <Input placeholder="Email" name="email" onChange={onChange} onBlur={() => onBlur('email')} />
                  </Form.Item>
                </Col>

                <Col style={{ marginBottom: 16 }}>
                  <Form.Item validateStatus={fieldErrors.password ? 'error' : ''} help={fieldErrors.password}>
                    <PasswordInput
                      placeholder="Password"
                      name="password"
                      onChange={onChange}
                      onBlur={() => onBlur('password')}
                    />
                  </Form.Item>
                </Col>
                {!hasAccount && (
                  <Col style={{ marginBottom: 40 }}>
                    <Form.Item
                      validateStatus={fieldErrors.confirmPassword ? 'error' : ''}
                      help={fieldErrors.confirmPassword}
                    >
                      <PasswordInput
                        placeholder="Confirm password"
                        name="confirmPassword"
                        onChange={onChange}
                        onBlur={() => onBlur('confirmPassword', 'confirm password')}
                      />
                    </Form.Item>
                  </Col>
                )}
                <Col>
                  <Button
                    className={styles.button}
                    type="primary"
                    size="large"
                    onClick={hasAccount ? logIn : signUp}
                    loading={loadingButton}
                    disabled={disableSubmitButton}
                  >
                    {!loadingButton ? (hasAccount ? 'Log In' : 'Sign Up') : ''}
                  </Button>
                </Col>
              </Form>
            </Row>
          </Col>
        </Row>
      </Row>
    </>
  );
};

const mapStateToProps = (state: Store) => ({
  signUpStore: state.signUp,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  signUpUserSuccess: (data: SignUp): void => dispatch(signUpSuccess(data)),
  signUpUserError: (error: any): void => dispatch(signUpError(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
