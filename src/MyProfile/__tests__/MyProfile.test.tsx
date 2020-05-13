import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import MyProfile from '../MyProfile';

describe('Tests for my profile container', () => {
  const wrapper: ReactWrapper = mount(<MyProfile />);

  it('Should render my profile without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
