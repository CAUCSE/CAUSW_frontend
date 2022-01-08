import { Route, Switch } from 'react-router-dom';
import { PAGE_URL } from '@/configs/path';
import { CircleHome } from './Home';
import { CircleJoin } from './Join';

export const CircleRouter: React.FC = () => (
  <Switch>
    <Route path={PAGE_URL.CircleJoin} component={CircleJoin} />
    <Route path={PAGE_URL.Circle} component={CircleHome} />
  </Switch>
);
