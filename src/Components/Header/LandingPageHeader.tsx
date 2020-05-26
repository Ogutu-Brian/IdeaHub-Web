import React from 'react';
import { Row } from 'antd';

import Header from './Header';

import styles from './LandingPageHeader.module.scss';

interface Props {
  hasAccount?: boolean;
  hasHeaderButtons: boolean;
}

const LandingPageHeader: React.FC<Props> = (props) => {
  const { hasAccount, hasHeaderButtons } = props;

  return (
    <Row className={styles.header}>
      <Header title="IdeaHub" hasAccount={hasAccount} hasHeaderButtons={hasHeaderButtons} />
    </Row>
  );
};

export default LandingPageHeader;
