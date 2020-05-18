import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import Profile from '../Profile';

describe('Tests for profile', () => {
  const wrapper: ReactWrapper = mount(<Profile />);

  it('Should render profile component without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
