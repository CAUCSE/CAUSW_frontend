import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PAGE_URL } from './configs/path';
import { AuthRouter } from './AuthRouter';
import { PageSignIn } from './pages/singIn';
import { PageSignUp } from './pages/signUp';

export const PageRouter: React.FC = () => {
  return (
    <Router basename={PAGE_URL.Main}>
      <Switch>
        <Route path={PAGE_URL.SignIn} exact component={PageSignIn} />
        <Route path={PAGE_URL.SignUp} exact component={PageSignUp} />

        <Route path={PAGE_URL.Err404} exact component={() => <>404</>} />
        <AuthRouter>
          <Route path={PAGE_URL.Main} component={() => <>메인 페이지 당!</>} />
        </AuthRouter>
      </Switch>
    </Router>
  );
};
