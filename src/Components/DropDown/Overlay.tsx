import React from 'react';
import { Dropdown } from '@primer/components';

import styles from './Overlay.module.scss';

interface Props {
  className?: string;
}

const Overlay: React.FC<Props> = (props) => {
  const { className } = props;
  const classNames: string = [styles.overlayContainer, className].join(' ');

  return (
    <div className={classNames}>
      <Dropdown.Menu>
        <Dropdown.Item>Item 1</Dropdown.Item>
      </Dropdown.Menu>
    </div>
  );
};

export default Overlay;
