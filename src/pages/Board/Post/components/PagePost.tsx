import React from 'react';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '@/stores/RootStore';
import { BoardContainer } from '@/stores/BoardStore';
import { PageHeader } from '../../stlyed';
import { Posts } from '../Posts';

export const PagePost: React.FC = observer(() => {
  const {
    board: { boardName },
  } = useRootStore();

  return (
    <BoardContainer>
      <PageHeader>{boardName}</PageHeader>
      <Posts />
    </BoardContainer>
  );
});
