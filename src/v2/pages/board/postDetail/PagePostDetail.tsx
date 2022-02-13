import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { Route, Switch, useParams } from 'react-router-dom';

import { Breadcrumb } from '../components';
import {
  CommentInput,
  CommentMenu,
  DeleteStoreProvider,
  PostAuthor,
  PostReplyComments,
  PostComments,
  PostDetailMenu,
} from './components';
import { CommentDeleteModal } from './components/CommentDeleteModal';
import { PostDeleteModal } from './components/PostDeleteModal';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';
import { Header, PostCommentNum } from '@/v2/components';
import { useInitPage } from '@/v2/hooks';

export const PagePostDetail: React.FC = observer(() => {
  const { postId } = useParams<{ boardId: string; postId: string }>();
  const {
    comment,
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
          <Switch>
            <Route path={PAGE_URL.PostReplyComment}>
              <PostReplyComments />
            </Route>
            <Route>
              <PostComments list={comment.comments} />
            </Route>
          </Switch>
        </>
      ) : null}
      <PostDeleteModal />
      <CommentMenu />
      <CommentDeleteModal />
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
