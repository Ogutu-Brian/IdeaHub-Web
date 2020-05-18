import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import { Idea } from '../';
import { MockData } from '../../../MockData';

describe('Tests for idea', () => {
  const wrapper: ReactWrapper = mount(
    <BrowserRouter>
      <Idea idea={MockData.Ideas[0]} />
    </BrowserRouter>,
  );

  it('Should mount idea without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
