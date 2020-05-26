import React from 'react';
import { PageHeader, Row, Col } from 'antd';
import { PageHeaderProps } from 'antd/lib/page-header';
import { ButtonProps } from 'antd/lib/button';
import { Link } from 'react-router-dom';

import { Button } from '../Button';

import styles from './Header.module.scss';

interface Props extends PageHeaderProps {
  hasAccount: boolean;
}

interface BtnProps extends ButtonProps {
  hasAccount: boolean;
}

const HeaderButton: React.FC<BtnProps> = (props) => {
  const { hasAccount, ...restProps } = props;

  return (
    <Row type="flex">
      <Col>
        <Link to={hasAccount ? '/signup' : '/login'}>
          <Button size="large" {...restProps}>
            {hasAccount ? 'Sign Up' : 'Log In'}
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

const Header: React.FC<Props> = (props) => {
  const { hasAccount, ...restProps } = props;

  return <PageHeader className={styles.header} extra={<HeaderButton hasAccount={hasAccount} />} {...restProps} />;
};

export default Header;
