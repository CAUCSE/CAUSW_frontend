import { useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '@/stores/RootStore';

import { Header } from '@/components/header';
import { Breadcrumb } from './components/Detail/Breadcrumb';
import { PostAuthor } from './components/Detail/PostAuthor';
import { PostContent } from './components/Detail/styled';
import { PostComments } from './components/Detail/PostComments';
import { ContextMenu } from '@/pages/Post/components/Detail/ContextMenu';
import { CommentInput } from './components/Detail/CommentInput';
import { CommentNum } from '@/components/StyledPost';

export const PagePostDetail: React.FC = observer(() => {
  const { postId } = useParams<{ boardId: string; postId: string }>();
  const {
    ui,
    post: { fetchPost, post, comments },
  } = useRootStore();

  useLayoutEffect(() => {
    ui.FooterNavigation = CommentInput;
    return () => (ui.FooterNavigation = undefined);
  }, []);

  useEffect(() => {
    fetchPost(postId);
  }, [postId]);

  return post ? (
    <>
      <Header TopComponent={Breadcrumb} title={post.title} withBack RightComponent={ContextMenu} />
      <PostAuthor model={post.author} date={post.formatedCreatedAt} />
      <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
      <CommentNum num={post.numComment} />
      <PostComments list={comments} />
    </>
  ) : null;
});
