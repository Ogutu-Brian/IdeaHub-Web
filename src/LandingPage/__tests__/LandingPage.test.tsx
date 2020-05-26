import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import LandingPage from '../LandingPage';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Tests for landing page', () => {
  const wrapper: ReactWrapper = mount(
    <Provider store={store}>
      <Router>
        <LandingPage hasAccount={false} />
      </Router>
    </Provider>,
  );

  it('Should render the landing page without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
