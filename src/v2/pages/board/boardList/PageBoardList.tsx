import { useEffect } from 'react';

import { Boards } from './components';

import { useRootStore } from '@/stores/RootStore';
import { Header, LayoutHOC, UniformLogo } from '@/v2/components';

const PageBoardList: React.FC = () => {
  const { board } = useRootStore();

  useEffect(() => {
    board.fetch();
  }, []);

  return (
    <>
      <Header title="게시판 목록" RightComponent={UniformLogo} />
      <Boards />
    </>
  );
};

export default LayoutHOC(PageBoardList);
