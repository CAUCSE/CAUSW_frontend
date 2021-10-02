import React from 'react';
import * as S from './stlyed';
import { Boards } from './Boards';

export const PageBoard: React.FC = React.memo(() => (
  <>
    <S.PageHeader>게시판 목록</S.PageHeader>
    <S.Mascote />
    <Boards />
  </>
));
