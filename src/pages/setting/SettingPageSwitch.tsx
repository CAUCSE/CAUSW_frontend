import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { PAGE_URL } from '@/configs/path';

const SettingHomePage = lazy(() => import('./home/SettingHomePage'));
const SettingPasswordPage = lazy(() => import('./password/SettingPasswordPage'));
const SettingProfilePage = lazy(() => import('./profile/SettingProfilePage'));
const SettingRoleAlumniPage = lazy(() => import('./roleAlumni/SettingRoleAlumniPage'));
const SettingRoleCouncilPage = lazy(() => import('./roleCouncil/SettingRoleCouncilPage'));
const SettingRoleDelegationPage = lazy(() => import('./roleDelegation/SettingRoleDelegationPage'));
const SettingRoleLeaderCirclePage = lazy(
  () => import('./roleLeaderCircle/SettingRoleLeaderCirclePage'),
);
const SettingRoleLeaderGradePage = lazy(
  () => import('./roleLeaderGrade/SettingRoleLeaderGradePage'),
);
const SettingRoleManagementPage = lazy(() => import('./roleManagement/SettingRoleManagementPage'));
const SettingUsersPage = lazy(() => import('./users/SettingUsersPage'));

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
