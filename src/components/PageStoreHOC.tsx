import React, { useLayoutEffect, useRef } from 'react';

import { PageRoot } from './Layout';

import { useRootStore } from '@/stores/RootStore';
import { PageUiProvider } from '@/v2/hooks';

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
