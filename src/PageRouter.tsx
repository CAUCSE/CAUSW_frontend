import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PAGE_URL } from './configs/path';
import { AuthRouter } from './AuthRouter';
import * as Pages from './pages';

export const PageRouter: React.FC = React.memo(() => (
  <Router>
    <Switch>
      {/* 회원 페이지 */}
      <Route path={PAGE_URL.SignIn} exact component={Pages.SignIn} />
      <Route path={PAGE_URL.SignUp} exact component={Pages.SignUp} />
      <Route path={PAGE_URL.Err404} exact component={() => <>404</>} />

      <AuthRouter>
        <Route path={PAGE_URL.Home} component={Pages.Home} />
        <Route path={PAGE_URL.Circle} component={Pages.Circle} />
        <Route path={PAGE_URL.Board} component={Pages.Board} />
      </AuthRouter>
    </Switch>
  </Router>
));
