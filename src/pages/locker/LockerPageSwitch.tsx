import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const LockerList = lazy(() => import('./list/LockerListPage'));
const LockerLocations = lazy(() => import('./locations/LockerLocationsPage'));

import { PAGE_URL } from '@/configs/path';

export const LockerPageSwitch: React.FC = () => (
  <Switch>
    <Route path={PAGE_URL.LockerLocation} component={LockerLocations} />
    <Route path={PAGE_URL.Locker} component={LockerList} />
  </Switch>
);
