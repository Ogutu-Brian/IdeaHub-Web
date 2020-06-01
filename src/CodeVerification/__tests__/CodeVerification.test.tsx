import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CodeVerification from '../CodeVerification';
import { BrowserRouter } from 'react-router-dom';

describe('Tests for code verification page', () => {
  const store = createMockStore([thunk])({
    signUp: { email: 'test@gmail.com' },
  });

  const props = {
    history: {
      push: jest.fn(),
    },
  };

  const wrapper: ReactWrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <CodeVerification {...props} />
      </BrowserRouter>
    </Provider>,
  );

  it('should render component without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
