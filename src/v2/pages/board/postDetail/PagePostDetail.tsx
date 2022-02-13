import { observer } from 'mobx-react-lite';
import { Route, Switch, useParams } from 'react-router-dom';

import { Breadcrumb } from '../components';
import { CommentInput, CommentMenu, PostAuthor, PostReplyComments, PostComments, PostDetailMenu } from './components';
import { CommentDeleteModal } from './components/CommentDeleteModal';
import { PostDeleteModal } from './components/PostDeleteModal';
import { PageUiProvider } from './PagePostDetailUiStore';
import { PostContent } from './styled';

import { PAGE_URL, PostParams } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';
import { Header, PostCommentNum } from '@/v2/components';
import { useInitPage } from '@/v2/hooks';

export const PagePostDetail: React.FC = observer(() => {
  const { postId } = useParams<PostParams>();
  const {
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
    <PageUiProvider>
      {post ? (
        <>
          <Header TopComponent={Breadcrumb} title={post.title} withBack RightComponent={PostDetailMenu} />
          <PostAuthor model={post.author} date={post.formatedCreatedAt} />
          <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
          <PostCommentNum num={post.commentCount} />
          <Switch>
            <Route path={PAGE_URL.PostReplyComment} component={PostReplyComments} />
            <Route path={PAGE_URL.PostDetail} component={PostComments} />
          </Switch>
        </>
      ) : (
        <>{/* TODO: 페이지 스켈레톤 */}</>
      )}
      <PostDeleteModal />
      <CommentMenu />
      <CommentDeleteModal />
    </PageUiProvider>
  );
});
