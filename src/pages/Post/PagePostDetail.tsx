import { useEffect } from 'react';
import { useParams } from 'react-router';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '@/stores/RootStore';

import { Header } from '@/components/header';
import { Breadcrumb } from './components/Detail/Breadcrumb';
import { PostAuthor } from './components/Detail/PostAuthor';
import { PostContent } from './components/Detail/styled';
import { CommentNum } from './components/Detail/CommentNum';
import { PostComments } from './components/Detail/PostComments';

export const PagePostDetail: React.FC = observer(() => {
  const { postId } = useParams<{ boardId: string; postId: string }>();
  const {
    post: { fetchPost, post, comments },
  } = useRootStore();

  useEffect(() => {
    fetchPost(postId);
  }, [postId]);

  console.debug(comments);

  return post ? (
    <>
      <Header TopComponent={Breadcrumb} title={post.title} withBack />
      <PostAuthor model={post.author} date={post.formatedCreatedAt} />
      <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
      <CommentNum num={post.numComment} />
      <PostComments list={comments} />
    </>
  ) : null;
});
