import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '@/stores/RootStore';
import { Header, UniformLogo } from '@/components/header';
import { Boards } from './components/Boards';

export const PageBoard: React.FC = observer(() => {
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
});
