import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { PasswordInput } from '../Input';

describe('Tests for password input', () => {
  const wrapper: ReactWrapper = mount(<PasswordInput />);

  it('Should render input password without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
