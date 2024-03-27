import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useRef } from 'react';
import { generatePath, useHistory, useParams } from 'react-router-dom';
import { Virtuoso } from 'react-virtuoso';

import { ReplyCommentContainer } from './ReplyCommentContainer';
import { BackLink, ReplyCommentsBox } from './styled';
import { CommentCard } from '../Comment';

import { PAGE_URL, PostParams } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

export const PostReplyComments: React.FC<{ model: Model.Comment }> = observer(({ model }) => {
  //const { boardId, postId, commentId } = useParams<PostParams>();
  //const { replace } = useHistory();
  const {
    setVirtuosoRef,
    screenRef,
    replyComments: { fetch, reset, parent, comments, hasMore, page },
    commentInput: { resetState },
  } = usePageUiStore<PageUiStore.PostDetail>();

  // const handleBack = useCallback(
  //   () => replace(generatePath(PAGE_URL.PostDetail, { boardId, postId })),
  //   [boardId, postId],
  // );

  const virtuoso = useRef(null);
  const timer = useRef<NodeJS.Timeout>();
  const loadMore = useCallback(
    (hasMore: boolean, page: number) => () => {
      if (timer.current) clearTimeout(timer.current);
      if (hasMore) timer.current = setTimeout(() => fetch(model.id, page + 1), 50);
    },
    [model.postId],
  );

  useEffect(() => {
    setVirtuosoRef(virtuoso);
  }, [parent]);

  useEffect(() => {
    fetch(model.id);
    return () => {
      //reset();
      resetState();
    };
  }, [model.id]);

  return parent ? (
    <ReplyCommentsBox>
      <Virtuoso
        ref={virtuoso}
        style={{ maxHeight: '100vh', marginTop: '5px' }}
        customScrollParent={screenRef?.current as HTMLElement}
        endReached={loadMore(hasMore, page)}
        overscan={200}
        data={comments}
        itemContent={(index, comment) => <ReplyCommentContainer key={comment.id} model={comment} />}
      />
    </ReplyCommentsBox>
  ) : null;
});
