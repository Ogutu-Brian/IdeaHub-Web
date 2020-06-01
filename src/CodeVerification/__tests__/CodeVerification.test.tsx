import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CodeVerification from '../CodeVerification';

describe('Tests for code verification page', () => {
  const store = createMockStore([thunk])({});
  const wrapper: ReactWrapper = mount(
    <Provider store={store}>
      <CodeVerification />
    </Provider>,
  );

  it('should render component without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
