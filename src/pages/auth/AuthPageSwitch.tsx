import { Route, Switch } from 'react-router-dom';

import { Admission } from './admission';
import { SignIn } from './signIn';
import { SignUp } from './signUp';

import { PAGE_URL } from '@/configs/path';

export const AuthPageSwitch: React.FC = () => (
  <Switch>
    <Route path={PAGE_URL.SignIn} component={SignIn} />
    <Route path={PAGE_URL.APPLICATION} component={Admission} />
    <Route path={PAGE_URL.SignUp} component={SignUp} />
  </Switch>
);
