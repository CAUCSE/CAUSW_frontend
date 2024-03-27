import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';
import { Route, Switch, useParams } from 'react-router-dom';

import {
  CommentInput,
  CommentMenu,
  PostAuthor,
  PostComments,
  PostDetailMenu,
  // PostReplyComments,
} from './components';
import { CommentDeleteModal } from './components/CommentDeleteModal';
import { PostDeleteModal } from './components/PostDeleteModal';
import { PageUiStoreImpl } from './PostDetailPageUiStore';
import { PostContent } from './styled';

import {
  BodyScreen,
  Breadcrumb,
  Header,
  PageBody,
  PageStoreHOC,
  PostCommentNum,
} from '@/components';
import { PAGE_URL, PostParams } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

const PostDetailPage: React.FC = observer(() => {
  const { boardId, postId } = useParams<PostParams>();
  const { fetch, reset, setScreenRef, boardName, post } = usePageUiStore<PageUiStore.PostDetail>();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch(postId);
    return () => reset();
  }, [postId, fetch, reset]);

  useEffect(() => {
    setScreenRef(ref);
  }, [post, setScreenRef]);

  return (
    <>
      {post ? (
        <>
          <Header
            TopComponent={<Breadcrumb boardId={boardId} boardName={boardName} />}
            title={post.title}
            withBack
            RightComponent={<PostDetailMenu />}
          />
          <PageBody ref={ref}>
            <BodyScreen>
              <PostAuthor model={post.author} date={post.formattedCreatedAt} />
              <div className="ql-snow">
                <PostContent
                  className="ql-editor"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
              <PostCommentNum>{post.commentCount}</PostCommentNum>
              <Switch>
                {/* <Route path={PAGE_URL.PostReplyComment} component={PostReplyComments} /> */}
                <Route path={PAGE_URL.PostDetail} component={PostComments} />
              </Switch>
            </BodyScreen>
          </PageBody>
          <CommentInput />
        </>
      ) : (
        <>{/* TODO: 페이지 스켈레톤 */}</>
      )}
      <PostDeleteModal />
      {/* <CommentMenu /> */}
      <CommentDeleteModal />
    </>
  );
});

export default PageStoreHOC(<PostDetailPage />, { store: PageUiStoreImpl });
