import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { PAGE_URL } from '@/configs/path';

const CircleHome = lazy(() => import('./home/CircleHomePage'));
const CircleEditorPage = lazy(() => import('./editor/CircleEditorPage'));
const CircleUsersPage = lazy(() => import('./users/CircleUsersPage'));
const CircleJoin = lazy(() => import('./join/CircleJoinPage'));
const CircleMain = lazy(() => import('./main/CircleMainPage'));

export const CirclePageSwitch: React.FC = () => (
  <Switch>
    <Route path={PAGE_URL.Circle} exact component={CircleHome} />
    <Route path={PAGE_URL.CircleAdd} component={CircleEditorPage} />
    <Route path={PAGE_URL.CircleEdit} component={CircleEditorPage} />
    <Route path={PAGE_URL.CircleUsers} component={CircleUsersPage} />
    <Route path={PAGE_URL.CircleJoin} component={CircleJoin} />
    <Route path={PAGE_URL.CircleMain} component={CircleMain} />
  </Switch>
);
