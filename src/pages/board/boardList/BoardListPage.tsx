import { useEffect } from 'react';

import { PageUiStoreImpl } from './BoardListPageUiStore';
import { Boards, BoardCreateButton } from './components';
import { DeleteBoardModal } from './components/DeleteBoardModal';

import { UniformLogo } from '@/assets';
import { BodyScreen, GNB, Header, PageBody, PageStoreHOC } from '@/components';
import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores/RootStore';

const BoardListPage: React.FC = () => {
  const { fetchBoards } = usePageUiStore<PageUiStore.BoardList>();
  const {
    auth: { fetch, me },
  } = useRootStore();

  useEffect(() => {
    fetch();
    fetchBoards();
  }, [fetch]);

  return (
    <>
      {me?.isAdmin || me?.isCircleLeader || me?.isPresident ? (
        <Header title="게시판 목록" RightComponent={<BoardCreateButton />} />
      ) : (
        <Header title="게시판 목록" RightComponent={<UniformLogo />} />
      )}

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
