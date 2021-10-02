import React from 'react';
import boardJson from '@/assets/board.json';
import * as S from './stlyed';
import { Boards } from './components/Boards';

export const PageBoard: React.FC = React.memo(() => {
  return (
    <>
      <S.PageHeader>게시판 목록</S.PageHeader>
      <Boards board={boardJson.board as Board.RootObject['board']} />
    </>
  );
});
