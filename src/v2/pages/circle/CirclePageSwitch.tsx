import { Route, Switch } from 'react-router-dom';

import { CircleHome } from './home';
import { CircleJoin } from './join';
import { CircleMain } from './main';

import { PAGE_URL } from '@/configs/path';

export const CirclePageSwitch: React.FC = () => (
  <Switch>
    <Route path={PAGE_URL.CircleJoin} component={CircleJoin} />
    <Route path={PAGE_URL.CircleMain} component={CircleMain} />
    <Route path={PAGE_URL.Circle} component={CircleHome} />
  </Switch>
);
