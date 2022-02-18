import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';

export const useAuthRedirect = (): void => {
  const { replace } = useHistory();
  const {
    auth: { isSignIn },
  } = useRootStore();

  useLayoutEffect(() => {
    console.debug(isSignIn);
    if (isSignIn) replace(PAGE_URL.Home);
  }, [isSignIn]);
};
