import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';
import { generatePath, useParams } from 'react-router-dom';
import { Virtuoso } from 'react-virtuoso';

import { PostCard, PostCreateButton } from './components';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';
import { Header } from '@/v2/components';

export const PagePostList: React.FC = observer(() => {
  const { boardId } = useParams<{ boardId: string }>();
  const {
    post: { boardName, posts, hasMore, page, setPage, fetchAll, reset },
  } = useRootStore();
  const loadMore = useCallback(
    (page: number) => () =>
      hasMore &&
      setTimeout(() => {
        fetchAll(boardId, page + 1);
        setPage(page + 1);
      }, 50),
    [hasMore, boardId],
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
        data={posts}
        endReached={loadMore(page)}
        overscan={200}
        itemContent={(index, post) => (
          <PostCard key={post.id} model={post} to={generatePath(PAGE_URL.PostDetail, { boardId, postId: post.id })} />
        )}
      />
    </>
  );
});
