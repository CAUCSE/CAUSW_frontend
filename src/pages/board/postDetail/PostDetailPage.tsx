import { observer } from 'mobx-react-lite';
import { useEffect, useRef, useState } from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import ImageViewer from 'react-simple-image-viewer';

import {
  CommentInput,
  CommentMenu,
  PostAuthor,
  PostComments,
  PostDetailMenu,
  PostReplyComments,
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

  const [visible, setVisible] = useState(false);
  function openImageViewer() {
    setVisible(true);
  }
  function closeImageViewer() {
    setVisible(false);
  }

  useEffect(() => {
    fetch(postId);
    return () => reset();
  }, [postId]);

  useEffect(() => {
    setScreenRef(ref);
  }, [post]);

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
              <PostAuthor model={post.author} date={post.formatedCreatedAt} />
              <div className="ql-snow">
                <PostContent
                  onClick={openImageViewer}
                  className="ql-editor"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
              <PostCommentNum>{post.commentCount}</PostCommentNum>
              <Switch>
                <Route path={PAGE_URL.PostReplyComment} component={PostReplyComments} />
                <Route path={PAGE_URL.PostDetail} component={PostComments} />
              </Switch>
            </BodyScreen>
          </PageBody>
          <CommentInput />

          {console.log(post.content)}

          {visible ? (
            <ImageViewer
              backgroundStyle={{ zIndex: 10001 }}
              src={[
                `${(document.querySelector('.ql-editor p img') as HTMLImageElement | null)?.src}`,
                // TODO : post.content에서 가져와야됨
              ]}
              currentIndex={0}
              disableScroll={false}
              closeOnClickOutside={false}
              onClose={closeImageViewer}
            />
          ) : null}
        </>
      ) : (
        <>{/* TODO: 페이지 스켈레톤 */}</>
      )}
      <PostDeleteModal />
      <CommentMenu />
      <CommentDeleteModal />
    </>
  );
});

export default PageStoreHOC(<PostDetailPage />, { store: PageUiStoreImpl });
