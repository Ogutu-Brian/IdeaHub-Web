import React from "react";
import { Button as AntdButton } from "antd";
import { ButtonProps } from "antd/lib/button";

import styles from "./Button.module.scss";

const Button: React.FC<ButtonProps> = props => {
  return <AntdButton {...props} className={styles.button} />;
};

export default Button;
