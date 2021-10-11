import { memo, useEffect } from 'react';
import { PageHeader, Mascote } from './stlyed';
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
      <PageHeader>게시판 목록</PageHeader>
      <Mascote />
      <Boards />
    </BoardProvider>
  );
});
