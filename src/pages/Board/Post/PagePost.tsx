import React from 'react';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '@/stores/RootStore';
import { BoardContainer } from '@/stores/BoardStore';
import * as S from '../stlyed';

export const PagePost: React.FC = observer(() => {
  const {
    board: { boardName },
  } = useRootStore();

  return (
    <BoardContainer>
      <S.PageHeader>{boardName}</S.PageHeader>
    </BoardContainer>
  );
});
