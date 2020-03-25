import React from "react";
import { Input as AntdInput } from "antd";
import { InputProps } from "antd/lib/input";

import styles from "./Input.module.scss";

const Input: React.FC<InputProps> = props => {
  return <AntdInput {...props} className={styles.input} autoComplete="off" />;
};

export default Input;
