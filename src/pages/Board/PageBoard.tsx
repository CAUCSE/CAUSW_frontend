import React from 'react';
import * as S from './stlyed';
import boardJson from '@/assets/board.json';
import { Boards } from './components/Boards';

export const PageBoard: React.FC = React.memo(() => {
  return (
    <>
      <S.PageHeader>게시판 목록</S.PageHeader>
      <S.Mascote />
      <Boards board={boardJson.board as Board.RootObject['board']} />
    </>
  );
});
