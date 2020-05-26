import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import CodeVerification from '../CodeVerification';

describe('Tests for code verification page', () => {
  const wrapper: ReactWrapper = mount(<CodeVerification />);

  it('should render component without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
