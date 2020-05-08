import { USER_DETAILS } from '../actionTypes';
import { ProfileAction, Profile } from './interfaces';

export const fetchUserProfile = (profile: Profile): ProfileAction => ({
  type: USER_DETAILS,
  payload: profile,
});
