import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import MyProfile from '../MyProfile';

describe('Tests for my profile container', () => {
  const wrapper: ReactWrapper = mount(
    <BrowserRouter>
      <MyProfile />
    </BrowserRouter>,
  );

  it('Should render my profile without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
