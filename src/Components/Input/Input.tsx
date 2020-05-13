import React from 'react';
import { Input as AntdInput } from 'antd';
import { InputProps, TextAreaProps } from 'antd/lib/input';

import styles from './Input.module.scss';

const { Password, TextArea: AntTextArea } = AntdInput;

const PasswordInput: React.FC<InputProps> = (props) => {
  const { className, ...restProps } = props;
  const classNames: string = [styles.Input, className].join(' ');

  return <Password className={classNames} autoComplete="off" {...restProps} />;
};

const Input: React.FC<InputProps> = (props) => {
  const { className, ...restProps } = props;
  const classNames: string = [styles.Input, className].join(' ');

  return <AntdInput className={classNames} autoComplete="off" {...restProps} />;
};

const TextArea: React.FC<TextAreaProps> = (props) => {
  const { className, ...restProps } = props;
  const classNames: string = [styles.Input, className].join(' ');

  return <AntTextArea className={classNames} autoComplete="off" {...restProps} />;
};

export { PasswordInput, TextArea };

export default Input;
