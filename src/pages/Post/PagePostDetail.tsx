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
import { CommentInput } from './components/Comment/CommentInput';
import { CommentNum } from '@/components/StyledPost';
import { CommentMenuModal } from './components/Comment/CommentMenuModal';
import { CommentDeleteModal } from './components/Comment/CommentDeleteModal';

export const PagePostDetail: React.FC = observer(() => {
  const { postId } = useParams<{ boardId: string; postId: string }>();
  const {
    ui,
    post: { fetchPost, post },
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
      <PostComments list={ui.commentUi.comments} />

      <CommentMenuModal />
      <CommentDeleteModal />
    </>
  ) : null;
});
