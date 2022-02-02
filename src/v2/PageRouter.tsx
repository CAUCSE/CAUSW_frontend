import { memo } from 'react';
import { BrowserRouter as RootRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PAGE_URL } from '@/configs/path';
import * as Router from './pages';
import { AuthRouter } from './AuthRouter';

export const PageRouter: React.FC = memo(() => (
  <RootRouter>
    <Route exact path="/">
      <Redirect to={PAGE_URL.Home} />
    </Route>

    <Switch>
      <Route path={PAGE_URL.Auth} component={Router.AuthPage} />

      <AuthRouter></AuthRouter>
    </Switch>
  </RootRouter>
));
