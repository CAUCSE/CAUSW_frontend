import { observer } from 'mobx-react-lite';
import { useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Virtuoso } from 'react-virtuoso';

import { CommentCardContainer } from './CommentCardContainer';
import { CommentsBox } from './styled';

import { PostParams } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';

export const PostComments: React.FC = observer(() => {
  const { postId } = useParams<PostParams>();
  const timer = useRef<NodeJS.Timeout>();
  const {
    comment: { hasMore, page, fetch, comments },
  } = useRootStore();

  const loadMore = useCallback(
    (hasMore: boolean, page: number) => () => {
      if (timer.current) clearTimeout(timer.current);

      if (hasMore) {
        timer.current = setTimeout(() => {
          fetch(postId, page + 1);
        }, 50);
      }
    },
    [postId],
  );

  return (
    <CommentsBox>
      <Virtuoso
        useWindowScroll
        endReached={loadMore(hasMore, page)}
        overscan={200}
        data={comments}
        itemContent={(index, comment) => <CommentCardContainer key={comment.id} model={comment} withReplyLink />}
      />
    </CommentsBox>
  );
});
