import { useEffect } from 'react';

import { PageUiStoreImpl } from './BoardListPageUiStore';
import { Boards, BoardCreateButton } from './components';
import { DeleteBoardModal } from './components/DeleteBoardModal';

import { BodyScreen, GNB, Header, PageBody, PageStoreHOC } from '@/components';
import { usePageUiStore } from '@/hooks';

const BoardListPage: React.FC = () => {
  const { fetch } = usePageUiStore<PageUiStore.BoardList>();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header title="게시판 목록" RightComponent={<BoardCreateButton />} />

      <PageBody>
        <BodyScreen>
          <Boards />
        </BodyScreen>
      </PageBody>
      <GNB />

      <DeleteBoardModal />
    </>
  );
};

export default PageStoreHOC(<BoardListPage />, { store: PageUiStoreImpl });
