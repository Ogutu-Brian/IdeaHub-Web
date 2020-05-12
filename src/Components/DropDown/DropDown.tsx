import React from 'react';
import { Dropdown as AntDropdown } from 'antd';

import { DropDownItem } from './interfaces';
import Overlay from './Overlay';

interface Props {
  items?: DropDownItem[];
}

const DropDown: React.FC<Props> = (props) => {
  const { children, items } = props;

  return (
    <AntDropdown
      trigger={['hover']}
      overlay={
        <Overlay
          items={items}
        />
      }
    >
      {children}
    </AntDropdown>
  );
};

export default DropDown;
