import React from "react";
import { Input as AntdInput } from "antd";
import { InputProps } from "antd/lib/input";

import styles from "./Input.module.scss";

const PasswordInput: React.FC<InputProps> = props => (
  <AntdInput.Password {...props} className={styles.input} autoComplete="off" />
);

const Input: React.FC<InputProps> = props => (
  <AntdInput {...props} className={styles.input} autoComplete="off" />
);

export { PasswordInput };
export default Input;
