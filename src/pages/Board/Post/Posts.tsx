import React from 'react';
import { observer } from 'mobx-react-lite';
import { PostCard } from './components/PostCard';
import { useRootStore } from '@/stores/RootStore';

export const Posts: React.FC = observer(() => {
  const {
    board: { post },
  } = useRootStore();

  return (
    <>
      {post.map(item => (
        <PostCard item={item} />
      ))}
    </>
  );
});
