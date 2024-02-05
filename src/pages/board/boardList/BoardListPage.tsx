import { useEffect } from 'react';

import { PageUiStoreImpl } from './BoardListPageUiStore';
import { Boards } from './components';

import { UniformLogo } from '@/assets';
import { BodyScreen, GNB, Header, PageBody, PageStoreHOC } from '@/components';
import { usePageUiStore } from '@/hooks';

const BoardListPage: React.FC = () => {
  const { fetch } = usePageUiStore<PageUiStore.BoardList>();

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <>
      <Header title="게시판 목록" RightComponent={<UniformLogo />} />
      <PageBody>
        <BodyScreen>
          <Boards />
        </BodyScreen>
      </PageBody>
      <GNB />
    </>
  );
};

export default PageStoreHOC(<BoardListPage />, { store: PageUiStoreImpl });
