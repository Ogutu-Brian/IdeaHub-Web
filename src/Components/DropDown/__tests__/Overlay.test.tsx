import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import Overlay from '../Overlay';
import { BrowserRouter } from 'react-router-dom';

describe('Tests for overlay', () => {
  const wrapper: ReactWrapper = mount(
    <BrowserRouter>
      <Overlay />
    </BrowserRouter>,
  );

  it('Should render overlay without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
