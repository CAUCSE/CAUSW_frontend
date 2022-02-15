import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { MobileGnb, Body, ScreenArea } from './components';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';

export const AuthRouter: React.FC = observer(({ children, ...rest }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const {
    auth,
    ui: { setMainRef },
  } = useRootStore();

  useEffect(() => {
    setMainRef(ref);
  }, [ref]);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isSignIn ? (
          <>
            <Body>
              <ScreenArea ref={ref}>{children}</ScreenArea>
            </Body>
            <MobileGnb />
          </>
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
