import { Action } from '../interfaces';
import { SIGN_UP_SUCCESS, SIGN_UP_ERROR } from './actionTypes';
import { SignUp } from './actions/interfaces';
import { SIGN_UP_STAGES } from '../../utils';

export const initialState: SignUp = {
  firstName: '',
  lastName: '',
  email: '',
  stage: SIGN_UP_STAGES.INITIAL,
};

const signUp = (state: SignUp = initialState, action: Action): SignUp => {
  const { payload, type } = action;

  switch (type) {
    case SIGN_UP_SUCCESS:
      return {
        ...payload,
        stage: payload.stage,
      };
    case SIGN_UP_ERROR:
      return {
        error: action.payload,
        stage: SIGN_UP_STAGES.ERROR,
      };
    default:
      return state;
  }
};

export default signUp;
