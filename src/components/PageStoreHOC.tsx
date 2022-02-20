import React, { useLayoutEffect, useRef } from 'react';

import { PageRoot } from './Layout';

import { PageUiProvider } from '@/hooks';
import { useRootStore } from '@/stores/RootStore';

export const PageStoreHOC =
  (
    PageComponent: React.ReactNode,
    { store } = {} as {
      store?: unknown;
    },
  ): React.FC =>
  () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const {
      ui: { setMainRef },
    } = useRootStore();

    useLayoutEffect(() => {
      setMainRef(ref);
    }, []);

    return (
      <PageUiProvider store={store}>
        <PageRoot>{PageComponent}</PageRoot>
      </PageUiProvider>
    );
  };
