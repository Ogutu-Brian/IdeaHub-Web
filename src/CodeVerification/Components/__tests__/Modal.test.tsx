import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import VerificationModal from '../Modal';

describe('Tests for modal component', () => {
  const wrapper: ReactWrapper = mount(<VerificationModal />);

  it('Should render the modal without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
