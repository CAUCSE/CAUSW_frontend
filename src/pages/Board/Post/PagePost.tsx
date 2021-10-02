import { useRootStore } from '@/stores/RootStore';
import React from 'react';
import { useParams } from 'react-router';
import * as S from '../stlyed';

export const PagePost: React.FC = React.memo(() => {
  const { board } = useRootStore();
  const { key: postKey } = useParams<{ key: string }>();

  return (
    <>
      <S.PageHeader>{board.getPostName(postKey)}</S.PageHeader>
    </>
  );
});
