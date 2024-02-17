import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';

type Props = {
  children?: React.ReactNode;
};

export const AuthRouter: React.FC<Props> = observer(({ children, ...rest }) => {
  const {
    auth: { isSignIn, checkToken },
  } = useRootStore();
  const tokenAvailable = useRef<boolean>(false);

  const isTokenAvailable = async () => {
    const { success, errorCode, message } = (await checkToken()) as unknown as StoreAPI;
    if (success) tokenAvailable.current = true;
  };

  useEffect(() => {
    if (isSignIn && !tokenAvailable.current) isTokenAvailable();
    console.log(tokenAvailable.current);
  }, []);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        tokenAvailable.current && isSignIn ? (
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
