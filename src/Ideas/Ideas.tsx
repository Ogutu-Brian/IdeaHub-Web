import React from "react";
import { Row } from "antd";
import { Idea } from '../Ideas/components';

import { MockData } from '../utils';

import styles from "./Ideas.module.scss";

const Ideas: React.FC = () => {
  return <Row className={styles.ideas}>
    {MockData.Ideas.map(sample => <Idea />)}
  </Row>;
};

export default Ideas;
