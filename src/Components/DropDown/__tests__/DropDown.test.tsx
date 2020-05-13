import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import DropDown from '../DropDown';

describe('Tests for DropDown component', () => {
  const wrapper: ReactWrapper = mount(
    <DropDown>
      <div>Child</div>
    </DropDown>,
  );

  it('Should render dropdown without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
