import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { InputProps } from 'antd/lib/input';
import styles from './Search.module.scss';

const Search: React.FC<InputProps> = (props) => {
  const { className, ...restProps } = props;
  const classNames: string = [className, styles.Search].join(' ');

  return <Input prefix={<SearchOutlined />} className={classNames} {...restProps} placeholder="Search" />;
};

export default Search;
