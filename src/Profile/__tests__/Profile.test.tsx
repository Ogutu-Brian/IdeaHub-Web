import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import Profile from '../Profile';

describe('Tests for profile', () => {
  const wrapper: ReactWrapper = mount(
    <BrowserRouter>
      <Profile />
    </BrowserRouter>,
  );

  it('Should render profile component without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
