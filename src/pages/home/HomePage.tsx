import { memo, useEffect } from 'react';

import { CircleLinks, HomeBoards } from './components';
import { PageUiStoreImpl } from './HomePageUiStore';

import { BodyScreen, GNB, Header, PageBody, PageStoreHOC } from '@/components';
import { usePageUiStore } from '@/hooks';

const HomePage: React.FC = memo(() => {
  const { fetch } = usePageUiStore<PageUiStore.Home>();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header title="동문 네트워크" />
      <PageBody>
        <BodyScreen>
          <CircleLinks />
          <HomeBoards />
        </BodyScreen>
      </PageBody>
      <GNB />
    </>
  );
});

export default PageStoreHOC(<HomePage />, { store: PageUiStoreImpl });
