import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PAGE_URL } from './configs/path';
import { AuthRouter } from './AuthRouter';
import * as Pages from './pages';
import { MobileHeader } from 'components/common/header';
import { MobileNavigation } from 'components/common/footer';
import { MobileBody } from 'components/common/main';

export const PageRouter: React.FC = React.memo(() => (
  <Router>
    <MobileHeader />
    <Switch>
      {/* 회원 페이지 */}
      <Route path={PAGE_URL.SignIn} exact component={Pages.SignIn} />
      <Route path={PAGE_URL.SignUp} exact component={Pages.SignUp} />
      <Route path={PAGE_URL.Err404} exact component={() => <>404</>} />

      <AuthRouter>
        <MobileBody>
          <Route path={PAGE_URL.Home} component={Pages.Home} />
          <Route path={PAGE_URL.Circle} component={Pages.Circle} />

          <Route path={PAGE_URL.Board} exact component={Pages.Board} />
          <Route path={PAGE_URL.Post} exact component={Pages.Post} />
        </MobileBody>
      </AuthRouter>
    </Switch>
    <MobileNavigation />
  </Router>
));
