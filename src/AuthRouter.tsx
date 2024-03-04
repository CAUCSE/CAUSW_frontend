import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { useRootStore } from '@/stores/RootStore';

type Props = {
  children?: React.ReactNode;
};

export const AuthRouter: React.FC<Props> = observer(({ children, ...rest }) => {
  const {
    auth: { fetch },
  } = useRootStore();

  useEffect(() => {
    fetch();
  }, []);

  return <Route {...rest} render={() => children} />;
});
