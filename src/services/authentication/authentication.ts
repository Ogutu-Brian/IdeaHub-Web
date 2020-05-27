import humps from 'humps';

import { signUp } from './endPoints';
import { FieldsData } from './interfaces';
import axios from '../axiosConfig';

const signUpUser = (signUpData: FieldsData): Promise<any> => {
  return axios.post(signUp, humps.decamelizeKeys(signUpData));
};

export { signUpUser };
