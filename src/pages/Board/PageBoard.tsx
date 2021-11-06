// import { memo } from 'react';
// import { PageHeader, Mascote } from './styled';
// import { Boards } from './Boards';
// import { BoardProvider } from '@/stores/BoardStore';
import { Header, UniformLogo } from '@/components/header';
import { EmptyTop } from '@/components/header/EmptyTop';

// export const PageBoard: React.FC = memo(() => (
//   <BoardProvider>
//     <PageHeader>
//       <h2>게시판 목록</h2>
//     </PageHeader>
//     <Mascote />
//     <Boards />
//   </BoardProvider>
// ));

export const PageBoard: React.FC = () => (
  <>
    <Header title="게시판 목록" TopComponent={EmptyTop} Logo={UniformLogo} />
  </>
);
