import React from 'react';
import { Dropdown as AntDropdown } from 'antd';

import Overlay from './Overlay';

const DropDown: React.FC = (props) => {
  const { children } = props;

  return (
    <AntDropdown trigger={['click']} overlay={<Overlay />}>
      {children}
    </AntDropdown>
  );
};

export default DropDown;
