import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import BorderLessInput from '../BorderLessInput';

describe('Tests for BorderLessInput component', () => {
  const wrapper: ReactWrapper = mount(<BorderLessInput />);

  it('Should render the borderless input component without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
