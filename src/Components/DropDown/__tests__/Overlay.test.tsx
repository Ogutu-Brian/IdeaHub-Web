import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import Overlay from '../Overlay';

describe('Tests for overlay', () => {
  const wrapper: ReactWrapper = mount(<Overlay />);

  it('Should render overlay without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
