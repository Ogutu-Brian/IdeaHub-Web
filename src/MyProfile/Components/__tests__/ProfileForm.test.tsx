import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import ProfileForm from '../ProfileForm';

describe('Tests for profile form', () => {
  const wrapper: ReactWrapper = mount(<ProfileForm />);

  it('Render profile form without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
