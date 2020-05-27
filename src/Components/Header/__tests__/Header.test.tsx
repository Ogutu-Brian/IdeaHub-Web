import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../Header';

describe('header Tests', () => {
  const props = {
    title: 'Example Page',
    joinNow: jest.fn(),
    signIn: jest.fn(),
    hasAccount: false,
  };

  const wrapper: ReactWrapper = mount(
    <Router>
      <Header {...props} />
    </Router>,
  );
  it('Should render header without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
