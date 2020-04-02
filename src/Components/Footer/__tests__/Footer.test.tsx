import React from 'react';
import { ReactWrapper, mount } from 'enzyme';

import Footer from '../Footer';

describe('Tests for the footer', () => {
    const wrapper: ReactWrapper = mount(<Footer />);

    it('should test for footer', () => {
        expect(wrapper).toMatchSnapshot();
    });
});