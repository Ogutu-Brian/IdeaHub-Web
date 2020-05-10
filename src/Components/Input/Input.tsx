import React from 'react';
import { Input as AntdInput } from 'antd';
import { InputProps } from 'antd/lib/input';

import styles from './Input.module.scss';

const { Password } = AntdInput;

const PasswordInput: React.FC<InputProps> = (props) => (
  <Password {...props} className={styles.Input} autoComplete="off" />
);

const Input: React.FC<InputProps> = (props) => <AntdInput {...props} className={styles.Input} autoComplete="off" />;

export { PasswordInput };
export default Input;
