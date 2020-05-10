import React from 'react';
import { ReactWrapper, mount } from 'enzyme';

import { TextArea } from '../Input';

describe('Tests for text area', () => {
  const wrapper: ReactWrapper = mount(<TextArea />);

  it('Should render text area without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
