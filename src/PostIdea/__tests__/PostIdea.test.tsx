import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import PostIdea from '../PostIdea';

describe('Tests for posting idea container', () => {
  const wrapper: ReactWrapper = mount(<PostIdea />);

  it('Should render PostIdea component without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
