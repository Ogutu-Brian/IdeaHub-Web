import React, { useState } from "react";
import { Menu as AntMenu } from "antd";
import { faClock, faAddressCard } from "@fortawesome/free-regular-svg-icons";

import MenuTitle from "./MenuTitle";
import styles from './Menu.module.scss';

const { SubMenu } = AntMenu;

const Menu: React.FC = () => {
  const [selectedKey, selectKey] = useState<string>("");
  const selectOption = (option: string): void => selectKey(option);

  return (
    <AntMenu
      theme="dark"
      selectedKeys={[selectedKey]}
      mode="inline"
      style={{ height: "100vh" }}
      className={styles.menu}
    >
      <SubMenu title={<MenuTitle icon={faClock} label="My Ideas" />} key="sub1" className={styles.menu}>
        <AntMenu.Item key="1" onClick={() => selectOption("1")} >
          Finite Analysis
        </AntMenu.Item>
        <AntMenu.Item key="2" onClick={() => selectOption("2")}>
          Slimmer Fit Design
        </AntMenu.Item>
        <AntMenu.Item key="3" onClick={() => selectOption("3")}>
          Actuary Discovery
        </AntMenu.Item>
        <AntMenu.Item key="4" onClick={() => selectOption("4")}>
          Space X
        </AntMenu.Item>
      </SubMenu>
      <SubMenu
        title={<MenuTitle icon={faAddressCard} label="My Spaces" />}
        key="sub2"
      >
        <AntMenu.Item key="sub21" onClick={() => selectOption("sub21")}>
          Fashion Design
        </AntMenu.Item>
        <AntMenu.Item key="sub22" onClick={() => selectOption("sub22")}>
          Technology
        </AntMenu.Item>
        <AntMenu.Item key="sub23" onClick={() => selectOption("sub23")}>
          Education
        </AntMenu.Item>
        <AntMenu.Item key="sub24" onClick={() => selectOption("sub24")}>
          Medicine
        </AntMenu.Item>
        <AntMenu.Item key="sub25" onClick={() => selectOption("sub25")}>
          Food Science
        </AntMenu.Item>
      </SubMenu>
    </AntMenu>
  );
};

export default Menu;
