import { Profile } from './profile/actions/interfaces';

export interface Action {
  type: string;
  payload: any;
}

export interface Store {
  profile: Profile;
}
