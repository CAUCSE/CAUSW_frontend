import { BrowserRouter as RootRouter, Redirect, Route, Switch as RootSwitch } from 'react-router-dom';
import { PAGE_URL } from '@/configs/path';
import * as Switch from './pages';
import { AuthRouter } from './AuthRouter';

export const PageRouter: React.FC = () => (
  <RootRouter>
    <Route exact path="/">
      <Redirect to={PAGE_URL.Home} />
    </Route>

    <RootSwitch>
      <Route path={PAGE_URL.Auth} component={Switch.AuthPage} />

      <AuthRouter>
        <Route path={PAGE_URL.Home} component={Switch.HomePage} />
        <Route path={PAGE_URL.Circle} component={Switch.CirclePage} />
      </AuthRouter>
    </RootSwitch>
  </RootRouter>
);
