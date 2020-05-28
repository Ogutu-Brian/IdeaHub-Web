import React, { useState, useEffect, useCallback } from 'react';
import { Layout } from 'antd';
import { useMedia } from 'react-use';
import { useDispatch } from 'react-redux';

import { SideMenu } from '../SideMenu';
import { PageHeader } from '../Components';
import { DeviceMeasures } from '../utils';
import { fetchUserProfile } from '../store/profile/actions';
import { Profile } from '../store/profile/actions/interfaces';
import { testUser } from '../MockData/mockdata';

import styles from './Application.module.scss';

const { Content } = Layout;

const Application: React.FC<{}> = (props) => {
  const [showSideBar, openSideBar] = useState<boolean>(true);
  const [showDrawer, openDrawer] = useState<boolean>(false);
  const isMobile: boolean = useMedia(DeviceMeasures.MOBILE);
  const { children } = props;

  const dispatch = useDispatch();
  const fetchProfile = useCallback((profile: Profile) => dispatch(fetchUserProfile(profile)), [dispatch]);

  useEffect(() => {
    fetchProfile(testUser);
  }, [fetchProfile]);

  return (
    <Layout>
      <SideMenu collapsed={!showSideBar} openDrawer={showDrawer} closeDrawer={() => openDrawer(false)} />
      <Layout>
        <div className={styles.header}>
          <PageHeader
            openSideBar={!isMobile ? () => openSideBar(!showSideBar) : () => openDrawer(true)}
            isMobile={isMobile}
            collapsed={!showSideBar}
          />
        </div>
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default Application;
