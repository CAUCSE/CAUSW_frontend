import React from 'react';
import { observer } from 'mobx-react-lite';
import { PostCard } from './PostCard';
import { useRootStore } from '@/stores/RootStore';
import { generatePath } from 'react-router';
import { PAGE_URL } from '@/configs/path';

export const Posts: React.FC = observer(() => {
  const {
    post: { posts },
  } = useRootStore();

  console.debug(posts);

  return (
    <>
      {posts.map(post => (
        <PostCard key={post.id} model={post} to={generatePath(PAGE_URL.PostDetail, { postId: post.id as string })} />
      ))}
    </>
  );
});
