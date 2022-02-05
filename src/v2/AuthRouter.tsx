import { observer } from 'mobx-react-lite';
import { Route, Redirect } from 'react-router-dom';

import { MobileGnb, Body, ScreenArea } from './components';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';

export const AuthRouter: React.FC = observer(({ children, ...rest }) => {
  const { auth } = useRootStore();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isSignIn ? (
          <>
            <Body>
              <ScreenArea>{children}</ScreenArea>
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
