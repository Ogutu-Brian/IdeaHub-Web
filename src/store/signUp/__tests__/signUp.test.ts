import signUp from '../signUp';
import { blankTestAction, successSignUpAction, signUpErrorAction } from '../../../MockData/mockdata';
import { initialState } from '../signUp';
import { SignUp } from '../actions/interfaces';
import { SIGN_UP_STAGES } from '../../../utils';

describe('Tests for signUp reducer', () => {
  it('tests for initial sign up state', () => {
    const result: SignUp = signUp(undefined, blankTestAction);

    expect(result).toEqual(initialState);
  });

  it('tests for success case', () => {
    const result: SignUp = signUp(undefined, successSignUpAction);

    expect(result).toEqual({
      ...successSignUpAction.payload,
      stage: SIGN_UP_STAGES.VERIFY,
    });
  });

  it('tests for error case', () => {
    const result: SignUp = signUp(undefined, signUpErrorAction);

    expect(result).toEqual({
      error: signUpErrorAction.payload,
      stage: SIGN_UP_STAGES.ERROR,
    });
  });
});
