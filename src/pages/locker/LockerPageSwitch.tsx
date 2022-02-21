import { Route, Switch } from 'react-router-dom';

import { LockerList } from './list';

import { PAGE_URL } from '@/configs/path';

export const LockerPageSwitch: React.FC = () => (
  <Switch>
    <Route path={PAGE_URL.LockerList} component={LockerList} />
  </Switch>
);
