import { Route, Switch } from 'react-router-dom';
import { PAGE_URL } from '@/configs/path';
import { CircleHome } from './home';
import { CircleJoin } from './join';

export const CirclePageSwitch: React.FC = () => (
  <Switch>
    <Route path={PAGE_URL.CircleJoin} component={CircleJoin} />
    <Route path={PAGE_URL.Circle} component={CircleHome} />
  </Switch>
);
