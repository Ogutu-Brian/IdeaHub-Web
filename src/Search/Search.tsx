import React from 'react';

import { SearchOutlined } from '@ant-design/icons';

import { InputProps } from 'antd/lib/input';
import styles from './Search.module.scss';
import { BorderLessInput } from '../Components';

const Search: React.FC<InputProps> = (props) => {
  const { className, ...restProps } = props;
  const classNames: string = [className, styles.Search].join(' ');

  return (
    <BorderLessInput
      prefix={<SearchOutlined className={styles.searchIcon} />}
      className={classNames}
      placeholder="Search"
      {...restProps}
    />
  );
};

export default Search;
