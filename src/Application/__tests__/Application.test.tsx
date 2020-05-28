import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import Application from '../Application';
import { MemoryRouter } from 'react-router-dom';

describe('Tests for application component', () => {
  const middleWares: ThunkMiddleware[] = [thunk];
  const store = configureMockStore(middleWares)();

  const wrapper: ReactWrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <Application />
      </MemoryRouter>
    </Provider>,
  );

  it('Should render application component without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
