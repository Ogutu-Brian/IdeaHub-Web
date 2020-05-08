import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../../store/reducers';
import Application from '../Application';

describe('Tests for application component', () => {
  const store = createStore(reducers, applyMiddleware(thunk));

  const wrapper: ReactWrapper = mount(
    <Provider store={store}>
      <Application />
    </Provider>,
  );

  it('Should render application component without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
