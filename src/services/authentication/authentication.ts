import axios from 'axios';
import humps from 'humps';

import { signUp } from './endPoints';
import { SignUpData } from './interfaces';

const signUpUser = (signUpData: SignUpData): Promise<any> => {
  return axios.post(signUp, humps.decamelizeKeys(signUpData));
};

export { signUpUser };
