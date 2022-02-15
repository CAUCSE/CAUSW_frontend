import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useRef } from 'react';
import { generatePath, useParams } from 'react-router-dom';
import { Virtuoso } from 'react-virtuoso';

import { PostCard, PostCreateButton } from './components';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';
import { Header } from '@/v2/components';

export const PagePostList: React.FC = observer(() => {
  const { boardId } = useParams<{ boardId: string }>();
  const timer = useRef<NodeJS.Timeout>();
  const {
    post: { boardName, posts, hasMore, page, setPage, fetchAll, reset },
  } = useRootStore();
  const loadMore = useCallback(
    (hasMore: boolean, page: number) => () => {
      if (timer.current) clearTimeout(timer.current);

      if (hasMore) {
        timer.current = setTimeout(() => {
          fetchAll(boardId, page + 1);
          setPage(page + 1);
        }, 50);
      }
    },
    [boardId],
  );

  useEffect(() => {
    fetchAll(boardId);

    return () => reset();
  }, [boardId]);

  return (
    <>
      <Header title={boardName} withBack={PAGE_URL.Board} RightComponent={PostCreateButton} />
      <Virtuoso
        style={{ height: 'calc(100% - 85px)' }}
        endReached={loadMore(hasMore, page)}
        overscan={200}
        data={posts}
        itemContent={(index, post) => (
          <PostCard key={post.id} model={post} to={generatePath(PAGE_URL.PostDetail, { boardId, postId: post.id })} />
        )}
      />
    </>
  );
});
