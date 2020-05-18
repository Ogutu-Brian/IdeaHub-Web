import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import SideMenu from '../SideMenu';
import { Props } from '../interfaces';

describe('Tests for the sideMenu', () => {
  const props: Props = {
    collapsed: false,
    openDrawer: true,
    closeDrawer: jest.fn(),
  };

  const wrapper: ReactWrapper = mount(
    <BrowserRouter>
      <SideMenu {...props} />
    </BrowserRouter>,
  );

  it('should render the SideMenu without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
