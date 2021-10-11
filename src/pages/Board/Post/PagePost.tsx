import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '@/stores/RootStore';
import { PageHeader } from '../stlyed';
import { Posts } from './Posts';
import { PostProvider } from '@/stores/PostStore';

export const PagePost: React.FC = observer(() => {
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
      <PageHeader>{boardName}</PageHeader>
      <Posts />
    </PostProvider>
  );
});
