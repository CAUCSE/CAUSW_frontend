import { useEffect } from 'react';

import { Boards } from './components';

import { useRootStore } from '@/stores/RootStore';
import { Header, UniformLogo } from '@/v2/components';

export const PageBoardList: React.FC = () => {
  const { board } = useRootStore();

  useEffect(() => {
    board.fetch();
  }, [board]);

  return (
    <>
      <Header title="게시판 목록" RightComponent={UniformLogo} />
      <Boards />
    </>
  );
};
