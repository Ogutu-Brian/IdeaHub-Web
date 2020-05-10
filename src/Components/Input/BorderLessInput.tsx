import React from 'react';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';

import styles from './BorderLessInput.module.scss';

const BorderLessInput: React.FC<InputProps> = (props) => {
  const { className, ...restProps } = props;
  const classNames: string = [className, styles.input].join(' ');

  return <Input className={classNames} {...restProps} />;
};

export default BorderLessInput;
