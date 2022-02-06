import { observer } from 'mobx-react-lite';
import React from 'react';
import { generatePath } from 'react-router';

import { PostCard } from './PostCard';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';

export const Posts: React.FC = observer(() => {
  const {
    post: { posts, boardId },
  } = useRootStore();

  return (
    <>
      {posts.map(post => (
        <PostCard key={post.id} model={post} to={generatePath(PAGE_URL.PostDetail, { boardId, postId: post.id })} />
      ))}
    </>
  );
});
