import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Footer, { MobileFooter } from '../Footer';

describe('Tesst for post idea modal footer', () => {
  const footer: ReactWrapper = mount(<Footer />);
  const mobileFooter: ReactWrapper = mount(<MobileFooter />);

  it('Should render footer without crushing', () => {
    expect(footer).toMatchSnapshot();
  });

  it('Should render mobile footer without crushing', () => {
    expect(mobileFooter).toMatchSnapshot();
  });
});
