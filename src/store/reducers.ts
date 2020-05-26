import { combineReducers } from 'redux';

import { profile } from './profile';
import { signUp } from './signUp';

export default combineReducers({
  profile,
  signUp,
});
