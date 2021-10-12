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
    {/* 회원 페이지 */}
    <Switch>
      <Route path={PAGE_URL.SignIn} component={Pages.SignIn} />
      <Route path={PAGE_URL.SignUp} component={Pages.SignUp} />
      <Route path={PAGE_URL.Err404} component={() => <>404</>} />

      <AuthRouter>
        <MobileBody>
          <Switch>
            <Route path={PAGE_URL.Home} component={Pages.Home} />
            <Route path={PAGE_URL.Circle} component={Pages.Circle} />

            <Route path={PAGE_URL.PostWrite} component={Pages.PostEditor} />
            <Route path={PAGE_URL.PostDetail} component={Pages.PostDetail} />
            <Route path={PAGE_URL.Post} component={Pages.PostList} />
            <Route path={PAGE_URL.Board} component={Pages.Board} />
          </Switch>
        </MobileBody>
      </AuthRouter>
    </Switch>
    <MobileNavigation />
  </Router>
));
