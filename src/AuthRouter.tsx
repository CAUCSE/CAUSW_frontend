import { Route, Redirect } from 'react-router-dom';
import { PAGE_URL } from './configs/path';
import { useRootStore } from './stores/RootStore';

export const AuthRouter: React.FC = ({ children, ...rest }) => {
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
              pathname: PAGE_URL.SingIn,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
