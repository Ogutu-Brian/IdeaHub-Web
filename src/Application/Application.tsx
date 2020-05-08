import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import { useMedia } from 'react-use';
import { connect } from 'react-redux';

import { SideMenu } from '../SideMenu';
import { PageHeader } from '../Components';
import { DeviceMeasures } from '../utils';
import { Ideas } from '../Ideas';
import { Footer } from '../Components/Footer';
import { fetchUserProfile } from '../store/profile/actions';
import { Store } from '../store/interfaces';
import { Profile } from '../store/profile/actions/interfaces';

interface Props {
  profile: Profile;
  fetchProfile: (profile: Profile) => void;
}

const Application: React.FC<Props> = (props) => {
  const [showSideBar, openSideBar] = useState<boolean>(true);
  const [showDrawer, openDrawer] = useState<boolean>(false);
  const { Content } = Layout;
  const isMobile: boolean = useMedia(DeviceMeasures.MOBILE);
  const path: string = '/ideahub';
  const { fetchProfile } = props;

  useEffect(() => {
    fetchProfile({
      username: 'Ogutu-Brian',
      avatar: '',
      firstName: 'Brian',
      lastName: 'Ogutu',
    });
  }, [fetchProfile]);

  return (
    <Router>
      <Layout>
        <SideMenu collapsed={!showSideBar} openDrawer={showDrawer} closeDrawer={() => openDrawer(false)} />
        <Layout>
          <PageHeader openSideBar={!isMobile ? () => openSideBar(!showSideBar) : () => openDrawer(true)} />
          <Content>
            <Switch>
              <Redirect exact from={path} to={`${path}/ideas`} />
              <Route exact path={`${path}/ideas`} component={Ideas} />
            </Switch>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Router>
  );
};

const mapStateToProps = (state: Store) => ({
  profile: state.profile,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchProfile: (profile: Profile): void => dispatch(fetchUserProfile(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
