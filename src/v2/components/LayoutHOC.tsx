import React, { useLayoutEffect, useRef } from 'react';

import { PageUiProvider } from '../hooks';
import { Body, ScreenArea } from './Atoms';
import { MobileGnb } from './Gnb';

import { useRootStore } from '@/stores/RootStore';

export const LayoutHOC =
  (
    PageComponent: React.FC,
    { pageUiStore, Nav } = { pageUiStore: {}, Nav: undefined } as { pageUiStore?: unknown; Nav?: React.FC | null },
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
      <PageUiProvider store={pageUiStore}>
        <Body>
          <ScreenArea ref={ref}>
            <PageComponent />
          </ScreenArea>
        </Body>
        <MobileGnb CustomNav={Nav} />
      </PageUiProvider>
    );
  };
