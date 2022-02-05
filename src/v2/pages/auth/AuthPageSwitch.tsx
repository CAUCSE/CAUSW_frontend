import { Route, Switch } from 'react-router-dom';

import { SignIn } from './signIn';

import { PAGE_URL } from '@/configs/path';

export const AuthPageSwitch: React.FC = () => (
  <Switch>
    <Route path={PAGE_URL.SignIn} component={SignIn} />
  </Switch>
);
