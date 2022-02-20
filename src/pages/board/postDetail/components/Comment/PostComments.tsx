import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Virtuoso } from 'react-virtuoso';

import { CommentCardContainer } from './CommentCardContainer';
import { CommentsBox } from './styled';

import { PostParams } from '@/configs/path';
import { usePageUiStore } from '@/v2/hooks';

export const PostComments: React.FC = observer(() => {
  const { postId } = useParams<PostParams>();
  const {
    setVirtuosoRef,
    screenRef,
    comments: { fetch, comments, page, hasMore },
  } = usePageUiStore<PageUiStore.PostDetail>();

  const virtuoso = useRef(null);
  const timer = useRef<NodeJS.Timeout>();
  const loadMore = useCallback(
    (hasMore: boolean, page: number) => () => {
      if (timer.current) clearTimeout(timer.current);
      if (hasMore) timer.current = setTimeout(() => fetch(postId, page + 1), 50);
    },
    [postId],
  );

  useEffect(() => {
    setVirtuosoRef(virtuoso);
  }, []);

  return (
    <CommentsBox>
      <Virtuoso
        ref={virtuoso}
        style={{ maxHeight: '100vh' }}
        customScrollParent={screenRef?.current as HTMLElement}
        endReached={loadMore(hasMore, page)}
        overscan={200}
        data={comments}
        itemContent={(index, comment) => (
          <CommentCardContainer key={comment.id} model={comment} withReplyLink />
        )}
      />
    </CommentsBox>
  );
});
