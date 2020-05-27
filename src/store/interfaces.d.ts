import { Profile } from './profile/actions/interfaces';
import { SignUp } from './signUp/actions/interfaces';

export interface Action {
  type: string;
  payload: any;
}

export interface Store {
  profile: Profile;
  signUp: SignUp;
}
