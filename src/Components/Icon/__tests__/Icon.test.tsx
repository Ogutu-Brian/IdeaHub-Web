import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

import { Icon } from '..';

describe('Tests for Icon', () => {
  const wrapper: ReactWrapper = mount(<Icon icon={faCalendar} />);

  it('Renders icon without crushing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});