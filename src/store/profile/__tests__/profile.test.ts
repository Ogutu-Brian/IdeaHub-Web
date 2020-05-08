import profile from '../profile';
import { blankTestAction, blankProfile, testUser, userDetailsAction } from '../../../MockData/mockdata';

describe('Tests for user profile reducers', () => {
  it('Should return a blank user result with a blank action', () => {
    expect(profile(undefined, blankTestAction)).toEqual(blankProfile);
  });

  it('Should return fetched user profile', () => {
    expect(profile(blankProfile, userDetailsAction)).toEqual(testUser);
  });
});
