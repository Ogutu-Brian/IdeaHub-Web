import { SignUp, SignUpAction } from './interfaces';
import { SIGN_UP_SUCCESS, SIGN_UP_ERROR } from '../actionTypes';

export const signUpSuccess = (userData: SignUp): SignUpAction => ({
  type: SIGN_UP_SUCCESS,
  payload: userData,
});

export const signUpError = (error: any): SignUpAction => ({
  type: SIGN_UP_ERROR,
  payload: error,
});
