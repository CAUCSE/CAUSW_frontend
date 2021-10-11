import React from 'react';
import { observer } from 'mobx-react-lite';
import { PostCard } from './components/PostCard';
import { useRootStore } from '@/stores/RootStore';
import { generatePath } from 'react-router';
import { PAGE_URL } from '@/configs/path';

export const Posts: React.FC = observer(() => {
  const {
    board: { boardId },
    post: { posts },
  } = useRootStore();

  return (
    <>
      {posts.map(item => (
        <PostCard to={generatePath(PAGE_URL.PostDetail, { boardId, postId: item.id as string })} item={item} />
      ))}
    </>
  );
});
