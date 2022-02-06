import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { Main, Container } from './components/layout/MobileLayout';
import { PAGE_URL } from './configs/path';
import * as Pages from './pages';

import { MobileFooter } from 'components/common/footer';
import { MobileHeader } from 'components/common/header';

export const PageRouter: React.FC = React.memo(() => (
  <Router>
    <Route exact path="/">
      <Redirect to={PAGE_URL.Home} />
    </Route>

    <MobileHeader />
    {/* 회원 페이지 */}
    <Switch>
      <Route path={PAGE_URL.Err404} component={() => <>404</>} />

      <AuthRouter>
        <Main>
          <Container>
            <Switch>
              <Route path={PAGE_URL.PostWrite} component={Pages.PostEditor} />
              <Route path={PAGE_URL.PostDetail} component={Pages.PostDetail} />
              <Route path={PAGE_URL.Post} component={Pages.PostList} />
              <Route path={PAGE_URL.Board} component={Pages.Board} />
            </Switch>
          </Container>
        </Main>
      </AuthRouter>
    </Switch>
    <MobileFooter />
  </Router>
));
