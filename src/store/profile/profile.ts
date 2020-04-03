import { User } from "../../interfaces";
import { USER_DETAILS } from './actionTypes';
import { Action } from "../interfaces";

const initialState: User = { name: '', avatar: '' };

const profile = (state: User = initialState, action: Action) => {
  switch (action.type) {
    case USER_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export default profile;
