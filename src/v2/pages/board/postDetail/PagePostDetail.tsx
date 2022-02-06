import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import { Breadcrumb } from '../components';
import { CommentDeleteModal, CommentInput, CommentMenuModal, PostAuthor, PostComments } from './components';

import { useRootStore } from '@/stores/RootStore';
import { Header, PostCommentNum } from '@/v2/components';
import { useInitPage } from '@/v2/hooks';

export const PagePostDetail: React.FC = observer(() => {
  const { postId } = useParams<{ boardId: string; postId: string }>();
  const {
    ui,
    post: { fetchPost, post },
  } = useRootStore();

  useInitPage({
    Nav: CommentInput,
    effect: () => {
      fetchPost(postId);
    },
    deps: [postId],
  });

  return post ? (
    <>
      <Header TopComponent={Breadcrumb} title={post.title} withBack RightComponent={null} />
      <PostAuthor model={post.author} date={post.formatedCreatedAt} />
      <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
      <PostCommentNum num={post.commentCount} />
      <PostComments list={ui.commentUi.comments} />
      <CommentMenuModal />
      <CommentDeleteModal />
    </>
  ) : null;
});

const PostContent = styled.p`
  font-size: 14px;
  line-height: 16px;

  img {
    width: 100%;
  }
`;