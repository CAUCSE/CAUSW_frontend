import { Route, Switch } from 'react-router-dom';

import { SettingHomePage } from './home';
import { SettingPasswordPage } from './password';
import { SettingProfilePage } from './profile';
import { SettingRoleAlumniPage } from './roleAlumni';
import { SettingRoleCouncilPage } from './roleCouncil';
import { SettingRoleDelegationPage } from './roleDelegation';
import { SettingRoleLeaderCirclePage } from './roleLeaderCircle';
import { SettingRoleLeaderGradePage } from './roleLeaderGrade';
import { SettingRoleManagementPage } from './roleManagement';
import { SettingUsersPage } from './users';

import { PAGE_URL } from '@/configs/path';

export const SettingPageSwitch: React.FC = () => (
  <Switch>
    <Route path={PAGE_URL.Setting} exact component={SettingHomePage} />
    <Route path={PAGE_URL.SettingProfile} component={SettingProfilePage} />
    <Route path={PAGE_URL.SettingPassword} component={SettingPasswordPage} />
    <Route path={PAGE_URL.SettingUsers} component={SettingUsersPage} />

    {/* 권한 관리 페이지 */}
    <Route path={PAGE_URL.SettingRoleManagement} exact component={SettingRoleManagementPage} />
    <Route path={PAGE_URL.SettingRoleCounil} component={SettingRoleCouncilPage} />
    <Route path={PAGE_URL.SettingRoleLeaderGrade} component={SettingRoleLeaderGradePage} />
    <Route path={PAGE_URL.SettingRoleLeaderCircle} component={SettingRoleLeaderCirclePage} />
    <Route path={PAGE_URL.SettingRoleAlumni} component={SettingRoleAlumniPage} />

    <Route path={PAGE_URL.SettingRoleDelegation} component={SettingRoleDelegationPage} />
  </Switch>
);
