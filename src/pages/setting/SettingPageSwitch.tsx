import { Route, Switch } from 'react-router-dom';

import { SettingHomePage } from './home';
import { SettingPasswordPage } from './password';
import { SettingPermissionManagementPage } from './permissionManagement';
import { SettingProfilePage } from './profile';
import { SettingUsersPage } from './users';

import { PAGE_URL } from '@/configs/path';

export const SettingPageSwitch: React.FC = () => (
  <Switch>
    <Route path={PAGE_URL.Setting} exact component={SettingHomePage} />
    <Route path={PAGE_URL.SettingProfile} component={SettingProfilePage} />
    <Route path={PAGE_URL.SettingPassword} component={SettingPasswordPage} />
    <Route path={PAGE_URL.SettingUsers} component={SettingUsersPage} />
    <Route
      path={PAGE_URL.SettingPermissionManagement}
      component={SettingPermissionManagementPage}
    />
  </Switch>
);
