import React from "react";
import { Menu } from "antd";
import { MenuProps } from "antd/lib/menu";

import styles from "./SideMenu.module.scss";

const { SubMenu } = Menu;

const SideMenu: React.FC<MenuProps> = props => (
  <Menu
    {...props}
    theme="dark"
    selectedKeys={["sub1"]}
    mode="inline"
    className={styles.sideMenu}
    style={{ height: "100vh" }}
  >
    <SubMenu title="Menu 1" key="sub1">
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
      <Menu.Item key="4">Option 4</Menu.Item>
    </SubMenu>
  </Menu>
);

export default SideMenu;
