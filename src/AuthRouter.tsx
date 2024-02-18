import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useHistory, Route, Redirect } from 'react-router-dom';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';

type Props = {
  children?: React.ReactNode;
};

export const AuthRouter: React.FC<Props> = observer(({ children, ...rest }) => {
  const {
    auth: { isSignIn, checkToken },
  } = useRootStore();
  const history = useHistory();

  const isTokenAvailable = async () => {
    const { success } = (await checkToken()) as unknown as StoreAPI;
    if (!success)
      history.push({
        pathname: PAGE_URL.SignIn,
        state: { from: location },
      });
  };

  useEffect(() => {
    if (isSignIn) isTokenAvailable();
  }, []);

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
