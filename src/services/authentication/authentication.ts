import humps from 'humps';

import { signUp, verify } from './endPoints';
import { FieldsData, VerificationData } from './interfaces';
import axios from '../axiosConfig';

const signUpUser = (signUpData: FieldsData): Promise<any> => {
  return axios.post(signUp, humps.decamelizeKeys(signUpData));
};

const verifyUser = (verificationData: VerificationData): Promise<any> => {
  return axios.post(verify, humps.decamelizeKeys(verificationData));
};

export { signUpUser, verifyUser };
