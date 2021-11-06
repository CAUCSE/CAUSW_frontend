// import React, { useEffect } from 'react';
// import { observer } from 'mobx-react-lite';
// import { useRootStore } from '@/stores/RootStore';
// import { PostProvider } from '@/stores/PostStore';
// import { PageHeader } from '../Board/styled';
// import { Posts } from './components/List/Posts';
// import { PostCreateButton } from './components/List/PostCreateButton';

// export const PagePostList: React.FC = observer(() => {
//   const {
//     board: { boardName },
//   } = useRootStore();

//   return (
//     <PostProvider>
//       <PageHeader>
//         <h2>{boardName}</h2>
//         <PostCreateButton />
//       </PageHeader>
//       <Posts />
//     </PostProvider>
//   );
// });

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '@/stores/RootStore';
import { PAGE_URL } from '@/configs/path';
import { Header } from '@/components/header';
import { PostCreateButton } from './components/List/PostCreateButton';

export const PagePostList: React.FC = observer(() => {
  const { boardId } = useParams<{ boardId: string }>();
  const {
    post: { boardName, fetch, reset },
  } = useRootStore();

  useEffect(() => {
    fetch(boardId);

    return () => reset();
  }, [boardId]);

  return (
    <>
      <Header title={boardName} withBack={PAGE_URL.Board} RightComponent={PostCreateButton} />
    </>
  );
});
