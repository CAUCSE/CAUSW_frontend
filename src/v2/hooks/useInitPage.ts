import { useEffect, useLayoutEffect } from 'react';

import { useRootStore } from '@/stores/RootStore';

export const useInitPage = ({
  Nav,
  effect = () => undefined,
  deps,
}: {
  Nav?: React.FC;
  effect: React.EffectCallback;
  deps?: React.DependencyList;
}): void => {
  const {
    ui: { setNav },
  } = useRootStore();

  useLayoutEffect(() => {
    if (Nav) {
      setNav(Nav);
      return () => setNav();
    }
  }, []);

  useEffect(effect, deps);
};
