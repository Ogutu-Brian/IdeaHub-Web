import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Menu from './Menu';
import { BrowserRouter } from 'react-router-dom';

describe('Tests for menu component', () => {
  const wrapper: ReactWrapper = mount(
    <BrowserRouter>
      <Menu isMobile={false} />
    </BrowserRouter>,
  );

  it('Should render menu without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
