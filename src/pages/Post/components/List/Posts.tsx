import React from 'react';
import { observer } from 'mobx-react-lite';
import { PostCard } from './PostCard';
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
      {posts.map(post => (
        <PostCard
          key={post.id}
          model={post}
          to={generatePath(PAGE_URL.PostDetail, { boardId, postId: post.id as string })}
        />
      ))}
    </>
  );
});
