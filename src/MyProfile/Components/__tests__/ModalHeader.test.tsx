import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import ModalHeader from '../ModalHeader';

describe('Tests for modal header', () => {
  const wrapper: ReactWrapper = mount(<ModalHeader />);

  it('Should render the header without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
