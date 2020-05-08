import { fetchUserProfile } from '../index';
import { testUser } from '../../../../MockData/mockdata';

describe('Tests for user profile', () => {
  it('Should load user profile ', () => {
    expect(fetchUserProfile(testUser).payload).toEqual(testUser);
  });
});
