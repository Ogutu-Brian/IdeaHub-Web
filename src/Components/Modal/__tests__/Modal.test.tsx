import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import Modal from '../Modal';

describe('Tests for modals', () => {
  const wrapper: ReactWrapper = mount(<Modal />);

  it('Should render the modal without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
