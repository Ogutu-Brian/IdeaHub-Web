export interface Profile {
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface ProfileAction {
  type: string;
  payload: Profile;
}
