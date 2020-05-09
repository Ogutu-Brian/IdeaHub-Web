import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Search from '../Search';
import { InputProps } from 'antd/lib/input';

const props: InputProps = {
  onChange: jest.fn(),
};

describe('Tests for search', () => {
  const wrapper: ReactWrapper = mount(<Search {...props} />);
  it('Should render search component without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
