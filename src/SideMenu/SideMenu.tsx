import React from "react";
import { Layout, Drawer } from "antd";
import { MenuProps } from "antd/lib/menu";
import { useMedia } from "react-use";

import { Menu } from "./components";

interface Props extends MenuProps {
  collapsed: boolean | undefined;
}

const { Sider } = Layout;

const SideMenu: React.FC<Props> = props => {
  const { collapsed } = props;
  const isMobile: boolean = useMedia("(max-width: 575px)");

  return !isMobile ? (
    <Sider collapsible collapsed={collapsed} trigger={null}>
      <Menu />
    </Sider>
  ) : (
    <Drawer
      placement="left"
      closable={false}
      visible
      getContainer={false}
      bodyStyle={{ padding: 0 }}
    >
      <Menu />
    </Drawer>
  );
};

export default SideMenu;
