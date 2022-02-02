import { PAGE_URL } from '@/configs/path';
import { Route, Switch } from 'react-router-dom';
import { PageSignIn } from './signIn/PageSignIn';

export const AuthPageRouter: React.FC = () => (
  <Switch>
    <Route path={PAGE_URL.SignIn} component={PageSignIn} />
  </Switch>
);
