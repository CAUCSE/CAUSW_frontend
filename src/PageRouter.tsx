import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PAGE_URL } from './configs/path';
import { AuthRouter } from './AuthRouter';
import * as Pages from './pages';

export const PageRouter: React.FC = React.memo(() => (
  <Router basename={PAGE_URL.Main}>
    <Switch>
      {/* 회원 페이지 */}
      <Route path={PAGE_URL.SignIn} exact component={Pages.SignIn} />
      <Route path={PAGE_URL.SignUp} exact component={Pages.SignUp} />
      <Route path={PAGE_URL.Err404} exact component={() => <>404</>} />

      <AuthRouter>
        <Route path={PAGE_URL.Main} component={() => <>메인 페이지 당!</>} />
      </AuthRouter>
    </Switch>
  </Router>
));
