import React from 'react';
import { Input as AntdInput } from 'antd';
import { InputProps, TextAreaProps } from 'antd/lib/input';

import styles from './Input.module.scss';

const { Password, TextArea: AntTextArea } = AntdInput;

const PasswordInput: React.FC<InputProps> = (props) => (
  <Password {...props} className={styles.Input} autoComplete="off" />
);

const Input: React.FC<InputProps> = (props) => <AntdInput {...props} className={styles.Input} autoComplete="off" />;

const TextArea: React.FC<TextAreaProps> = (props) => (
  <AntTextArea {...props} className={styles.Input} autoComplete="off" />
);

export { PasswordInput, TextArea };

export default Input;
