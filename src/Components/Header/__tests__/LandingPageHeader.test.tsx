import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import LandingPageHeader from '../LandingPageHeader';

describe('Tests for landing page', () => {
  const wrapper: ReactWrapper = mount(
    <Router>
      <LandingPageHeader hasAccount={false} />
    </Router>,
  );

  it('should render landing page header without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
