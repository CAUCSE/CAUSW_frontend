import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useRef } from 'react';
import { generatePath, useHistory, useParams } from 'react-router-dom';
import { Virtuoso } from 'react-virtuoso';

import { CommentCard } from '../Comment';
import { ReplyCommentContainer } from './ReplyCommentContainer';
import { BackLink, CommentsBox } from './styled';

import { PAGE_URL, PostParams } from '@/configs/path';
import { usePageUiStore } from '@/v2/hooks';

export const PostReplyComments: React.FC = observer(() => {
  const { boardId, postId, commentId } = useParams<PostParams>();
  const { replace } = useHistory();
  const {
    setVirtuosoRef,
    screenRef,
    replyComments: { fetch, reset, parent, comments, hasMore, page },
    commentInput: { resetState },
  } = usePageUiStore<PageUiStore.PostDetail>();

  const handleBack = useCallback(
    () => replace(generatePath(PAGE_URL.PostDetail, { boardId, postId })),
    [boardId, postId],
  );

  const virtuoso = useRef(null);
  const timer = useRef<NodeJS.Timeout>();
  const loadMore = useCallback(
    (hasMore: boolean, page: number) => () => {
      if (timer.current) clearTimeout(timer.current);
      if (hasMore) timer.current = setTimeout(() => fetch(commentId, page + 1), 50);
    },
    [postId],
  );

  useEffect(() => {
    setVirtuosoRef(virtuoso);
  }, [parent]);

  useEffect(() => {
    fetch(commentId);

    return () => {
      reset();
      resetState();
    };
  }, [commentId]);

  return parent ? (
    <CommentsBox>
      <BackLink onClick={handleBack}>전체 댓글</BackLink>
      <CommentCard model={parent} />
      <Virtuoso
        ref={virtuoso}
        style={{ maxHeight: '100vh', marginTop: '5px' }}
        customScrollParent={screenRef?.current as HTMLElement}
        endReached={loadMore(hasMore, page)}
        overscan={200}
        data={comments}
        itemContent={(index, comment) => <ReplyCommentContainer key={comment.id} model={comment} />}
      />
    </CommentsBox>
  ) : null;
});
