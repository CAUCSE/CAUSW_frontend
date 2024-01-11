import {
  BrowserRouter as RootRouter,
  Redirect,
  Route,
  Switch as RootSwitch,
} from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import * as Switch from './pages';

import { PAGE_URL } from '@/configs/path';

export const PageRouter: React.FC = () => (
  <RootRouter>
    <Route exact path="/">
      <Redirect to={PAGE_URL.Home} />
    </Route>

    <RootSwitch>
      <Route path={PAGE_URL.Auth} component={Switch.AuthPage} />

      <AuthRouter>
        <Route path={PAGE_URL.Home} component={Switch.HomePage} />
        <Route path={PAGE_URL.Locker} component={Switch.LockerPage} />
        <Route path={PAGE_URL.Circle} component={Switch.CirclePage} />
        <Route path={PAGE_URL.Board} component={Switch.BoardPage} />
        <Route path={PAGE_URL.Setting} component={Switch.SettingPage} />
        <Route path={PAGE_URL.History} component={Switch.HistoryPage} />
      </AuthRouter>
    </RootSwitch>
  </RootRouter>
);
