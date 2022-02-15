import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Virtuoso } from 'react-virtuoso';

import { CommentCardContainer } from './CommentCardContainer';
import { CommentsBox } from './styled';

import { PostParams } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';
import { usePageUiStore } from '@/v2/hooks';

export const PostComments: React.FC = observer(() => {
  const { postId } = useParams<PostParams>();
  const virtuoso = useRef(null);
  const timer = useRef<NodeJS.Timeout>();
  const {
    ui: { mainRef },
    comment: { hasMore, page, fetch, comments },
  } = useRootStore();
  const { setVirtuosoRef } = usePageUiStore<PageUiStore.PostDetail>();

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

  useEffect(() => {
    setVirtuosoRef(virtuoso);
  }, []);

  return (
    <CommentsBox>
      <Virtuoso
        ref={virtuoso}
        style={{ maxHeight: '100vh' }}
        customScrollParent={mainRef?.current as HTMLElement}
        endReached={loadMore(hasMore, page)}
        overscan={200}
        data={comments}
        itemContent={(index, comment) => <CommentCardContainer key={comment.id} model={comment} withReplyLink />}
      />
    </CommentsBox>
  );
});
