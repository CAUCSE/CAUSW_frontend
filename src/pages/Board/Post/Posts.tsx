import React from 'react';
import { observer } from 'mobx-react-lite';
import { PostCard } from './components/PostCard';
import { useRootStore } from '@/stores/RootStore';

export const Posts: React.FC = observer(() => {
  const {
    post: { posts },
  } = useRootStore();

  return (
    <>
      {posts.map(item => (
        <PostCard item={item} />
      ))}
    </>
  );
});
