import { useEffect } from 'react';

import { PageUiStoreImpl } from './BoardListPageUiStore';
import { BoardCreateButton } from './components/BoardCreateButton';
import { Boards } from './components/Boards';
import { DeleteBoardModal } from './components/DeleteBoardModal/DeleteBoardModal';

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
