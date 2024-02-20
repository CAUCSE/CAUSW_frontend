import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useHistory, useLocation, Route, Redirect } from 'react-router-dom';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';

type Props = {
  children?: React.ReactNode;
};

export const AuthRouter: React.FC<Props> = observer(({ children, ...rest }) => {
  const {
    auth: { checkToken },
  } = useRootStore();
  const history = useHistory();
  const location = useLocation();

  const isTokenAvailable = async () => {
    const { success } = (await checkToken()) as unknown as StoreAPI;
    if (!success)
      history.push({
        pathname: PAGE_URL.SignIn,
        state: { from: location },
      });
  };

  useEffect(() => {
    isTokenAvailable();
  }, []);

  return <Route {...rest} render={() => children} />;
});
