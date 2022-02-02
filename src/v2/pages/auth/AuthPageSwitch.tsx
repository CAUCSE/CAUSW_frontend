import { PAGE_URL } from '@/configs/path';
import { Route, Switch } from 'react-router-dom';
import { SignIn } from './signIn';

export const AuthPageSwitch: React.FC = () => (
  <Switch>
    <Route path={PAGE_URL.SignIn} component={SignIn} />
  </Switch>
);
