import { USER_DETAILS } from './actionTypes';
import { Action } from '../interfaces';
import { Profile } from './actions/interfaces';

const initialState: Profile = {
  username: '',
  avatar: '',
  firstName: '',
  lastName: '',
};

const profile = (state: Profile = initialState, action: Action) => {
  switch (action.type) {
    case USER_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export default profile;
