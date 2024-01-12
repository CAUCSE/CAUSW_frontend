import { observer } from 'mobx-react-lite';
import { Route, Redirect } from 'react-router-dom';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';

type Props = {
  children?: React.ReactNode;
};

export const AuthRouter: React.FC<Props> = observer(({ children, ...rest }) => {
  const {
    auth: { isSignIn },
  } = useRootStore();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isSignIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: PAGE_URL.SignIn,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
});
