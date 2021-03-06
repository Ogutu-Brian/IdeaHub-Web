import React from 'react';
import { Layout, Drawer } from 'antd';
import { useMedia } from 'react-use';

import { Menu } from './components';
import { DeviceMeasures } from '../utils';
import { Props } from './interfaces';

import styles from './SideMenu.module.scss';

const { Sider } = Layout;

const SideMenu: React.FC<Props> = (props) => {
  const { collapsed, openDrawer, closeDrawer } = props;
  const isMobile: boolean = useMedia(DeviceMeasures.MOBILE);

  return !isMobile ? (
    <Sider collapsible collapsed={collapsed} trigger={null} collapsedWidth={0} className={styles.sider}>
      <Menu collapsed={collapsed} isMobile={isMobile} />
    </Sider>
  ) : (
    <Drawer
      placement="left"
      closable={false}
      visible={openDrawer}
      getContainer={false}
      bodyStyle={{ padding: 0 }}
      onClose={closeDrawer}
    >
      <Menu collapsed={collapsed} isMobile={isMobile} />
    </Drawer>
  );
};

export default SideMenu;
