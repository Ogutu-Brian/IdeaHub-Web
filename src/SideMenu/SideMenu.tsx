import React, { useState } from "react";
import { Menu, Layout } from "antd";
import { MenuProps } from "antd/lib/menu";
import { faClock, faAddressCard } from "@fortawesome/free-regular-svg-icons";

import { MenuTitle } from "./components";

import styles from "./SideMenu.module.scss";

const { SubMenu } = Menu;
const { Sider } = Layout;

interface Props extends MenuProps {
  collapsed: boolean;
}

const SideMenu: React.FC<Props> = props => {
  const [selectedKey, selectKey] = useState<string>("");
  const { collapsed } = props;
  const selectOption = (option: string): void => selectKey(option);

  return (
    <Sider collapsible collapsed={collapsed} trigger={null}>
      <Menu
        {...props}
        theme="dark"
        selectedKeys={[selectedKey]}
        mode="inline"
        className={styles.sideMenu}
        style={{ height: "100vh" }}
      >
        <SubMenu
          title={<MenuTitle icon={faClock} label="My Ideas" />}
          key="sub1"
        >
          <Menu.Item key="1" onClick={() => selectOption("1")}>
            Finite Analysis
          </Menu.Item>
          <Menu.Item key="2" onClick={() => selectOption("2")}>
            Slimmer Fit Design
          </Menu.Item>
          <Menu.Item key="3" onClick={() => selectOption("3")}>
            Actuary Discovery
          </Menu.Item>
          <Menu.Item key="4" onClick={() => selectOption("4")}>
            Space X
          </Menu.Item>
        </SubMenu>
        <SubMenu
          title={<MenuTitle icon={faAddressCard} label="My Spaces" />}
          key="sub2"
        >
          <Menu.Item key="sub21" onClick={() => selectOption("sub21")}>
            Fashion Design
          </Menu.Item>
          <Menu.Item key="sub22" onClick={() => selectOption("sub22")}>
            Technology
          </Menu.Item>
          <Menu.Item key="sub23" onClick={() => selectOption("sub23")}>
            Education
          </Menu.Item>
          <Menu.Item key="sub24" onClick={() => selectOption("sub24")}>
            Medicine
          </Menu.Item>
          <Menu.Item key="sub25" onClick={() => selectOption("sub25")}>
            Food Science
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
