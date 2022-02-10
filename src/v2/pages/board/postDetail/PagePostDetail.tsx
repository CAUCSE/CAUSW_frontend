import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import { Breadcrumb } from '../components';
import {
  CommentDeleteModal,
  CommentInput,
  CommentMenuModal,
  DeleteStoreProvider,
  PostAuthor,
  PostComments,
  PostDetailMenu,
} from './components';
import { DeleteModal } from './components/PostDeleteModal';

import { useRootStore } from '@/stores/RootStore';
import { Header, PostCommentNum } from '@/v2/components';
import { useInitPage } from '@/v2/hooks';

export const PagePostDetail: React.FC = observer(() => {
  const { postId } = useParams<{ boardId: string; postId: string }>();
  const {
    ui,
    post: { fetch, post },
  } = useRootStore();

  useInitPage({
    Nav: CommentInput,
    effect: () => {
      fetch(postId);
    },
    deps: [postId],
  });

  return (
    <DeleteStoreProvider>
      {post ? (
        <>
          <Header TopComponent={Breadcrumb} title={post.title} withBack RightComponent={PostDetailMenu} />
          <PostAuthor model={post.author} date={post.formatedCreatedAt} />
          <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
          <PostCommentNum num={post.commentCount} />
          <PostComments list={ui.commentUi.comments} />
          <CommentMenuModal />
          <CommentDeleteModal />
        </>
      ) : null}
      <DeleteModal />
    </DeleteStoreProvider>
  );
});

const PostContent = styled.p`
  font-size: 14px;
  line-height: 16px;

  img {
    width: 100%;
  }
`;
