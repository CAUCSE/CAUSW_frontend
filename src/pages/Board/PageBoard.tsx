import { memo } from 'react';
import { PageHeader, Mascote } from './styled';
import { Boards } from './Boards';
import { BoardProvider } from '@/stores/BoardStore';

export const PageBoard: React.FC = memo(() => (
  <BoardProvider>
    <PageHeader>
      <h2>게시판 목록</h2>
    </PageHeader>
    <Mascote />
    <Boards />
  </BoardProvider>
));
