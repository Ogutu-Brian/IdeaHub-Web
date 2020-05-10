import React from 'react';
import { Button as AntdButton } from 'antd';
import { ButtonProps } from 'antd/lib/button';

import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = (props) => {
  const { className } = props;
  const classNames: string = [styles.button, className].join(' ');

  return <AntdButton {...props} className={classNames} />;
};

export default Button;
