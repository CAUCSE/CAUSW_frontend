import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { PAGE_URL } from './configs/path';
import { useRootStore } from './stores/RootStore';

export const PageRouter: React.FC = () => {
  return (
    <Router basename={PAGE_URL.Main}>
      <Switch>
        <Route path={PAGE_URL.SignUp} exact component={() => <>로그인 페이지 당!</>} />

        <AuthRouter>
          <Route path={PAGE_URL.Main} component={() => <>메인 페이지 당!</>} />
        </AuthRouter>
      </Switch>
    </Router>
  );
};

const AuthRouter: React.FC = ({ children, ...rest }) => {
  const { auth } = useRootStore();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isSignIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: PAGE_URL.SignUp,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
