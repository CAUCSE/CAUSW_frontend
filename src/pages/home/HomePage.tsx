import { memo, useEffect } from 'react';

import { CircleLinks, HomeBoards } from './components';
import EventBlock from './event/components/EventBlock';
import { PageUiStoreImpl } from './HomePageUiStore';

import { BodyScreen, GNB, Header, PageBody, PageStoreHOC } from '@/components';
import { usePageUiStore } from '@/hooks';

const HomePage: React.FC = memo(() => {
  const { fetch } = usePageUiStore<PageUiStore.Home>();

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <>
      <Header title="동문 네트워크" />
      <PageBody>
        <BodyScreen>
          <CircleLinks />
          <EventBlock />
          <HomeBoards />
        </BodyScreen>
      </PageBody>
      <GNB />
    </>
  );
});

export default PageStoreHOC(<HomePage />, { store: PageUiStoreImpl });
