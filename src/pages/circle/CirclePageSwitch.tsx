import { Route, Switch } from 'react-router-dom';

import { CircleEditorPage } from './editor';
import { CircleHome } from './home';
import { CircleJoin } from './join';
import { CircleMain } from './main';
import { CircleUsersPage } from './users';

import { PAGE_URL } from '@/configs/path';

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
