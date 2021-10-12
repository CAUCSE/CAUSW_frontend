import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '@/stores/RootStore';
import { PostProvider } from '@/stores/PostStore';
import { PageHeader } from '../Board/styled';
import { Posts } from './components/List/Posts';
import { PostCreateButton } from './components/List/PostCreateButton';

export const PagePostList: React.FC = observer(() => {
  const {
    board: { boardName, fetch: fetchBoard },
    post: { fetch: fetchPost, reset },
  } = useRootStore();

  useEffect(() => {
    fetchBoard();
    fetchPost();

    return () => reset();
  }, []);

  return (
    <PostProvider>
      <PageHeader>
        <h2>{boardName}</h2>
        <PostCreateButton />
      </PageHeader>
      <Posts />
    </PostProvider>
  );
});
