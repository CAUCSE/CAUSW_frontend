import { memo, useEffect } from 'react';
import { PageHeader, Mascote } from './styled';
import { Boards } from './Boards';
import { BoardProvider } from '@/stores/BoardStore';
import { useRootStore } from '@/stores/RootStore';

export const PageBoard: React.FC = memo(() => {
  const {
    board: { fetch },
  } = useRootStore();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <BoardProvider>
      <PageHeader>
        <h2>게시판 목록</h2>
      </PageHeader>
      <Mascote />
      <Boards />
    </BoardProvider>
  );
});
