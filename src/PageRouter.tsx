import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PAGE_URL } from './configs/path';
import { AuthRouter } from './AuthRouter';
import * as Page from './pages';

export const PageRouter: React.FC = () => {
  return (
    <Router basename={PAGE_URL.Main}>
      <Switch>
        <Route path={PAGE_URL.SignIn} exact component={Page.SignIn} />
        <Route path={PAGE_URL.SignUp} exact component={Page.SignUp} />

        <Route path={PAGE_URL.Err404} exact component={() => <>404</>} />
        <AuthRouter>
          <Route path={PAGE_URL.Main} component={Page.Main} />
        </AuthRouter>
      </Switch>
    </Router>
  );
};
