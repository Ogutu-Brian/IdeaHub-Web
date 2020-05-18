import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import { Ideas } from '..';

describe('Tests for Ideas', () => {
  const wrapper: ReactWrapper = mount(
    <BrowserRouter>
      <Ideas />
    </BrowserRouter>,
  );

  it('Should render ideas without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
