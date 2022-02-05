import { useEffect, useLayoutEffect } from 'react';

import { useRootStore } from '@/stores/RootStore';

export const useInitPage = (
  NavComponent: React.FC,
  effect: React.EffectCallback,
  deps?: React.DependencyList,
): void => {
  const {
    ui: { setNav },
  } = useRootStore();

  useLayoutEffect(() => {
    setNav(NavComponent);

    return () => setNav();
  }, []);

  useEffect(effect, deps);
};
