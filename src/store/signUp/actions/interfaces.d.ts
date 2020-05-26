export interface SignUp {
  firstName?: string;
  lastName?: string;
  email?: string;
  stage: string;
  error?: any;
}

export interface SignUpAction {
  type: string;
  payload: SignUp;
}
