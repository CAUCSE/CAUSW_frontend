import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useRef } from 'react';
import { generatePath, useParams } from 'react-router-dom';
import { Virtuoso } from 'react-virtuoso';

import { PostCard, PostCreateButton } from './components';
import { PageUiStoreImpl } from './PostListPageUiStore';

import { EmptyList, GNB, Header, PageBody, PageStoreHOC } from '@/components';
import { PAGE_URL, PostParams } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

const PostListPage: React.FC = observer(() => {
  const { boardId } = useParams<PostParams>();
  const { boardName, posts, hasMore, page, fetchAll, reset } =
    usePageUiStore<PageUiStore.PostList>();

  const timer = useRef<NodeJS.Timeout>();
  const loadMore = useCallback(
    (hasMore: boolean, page: number) => () => {
      if (timer.current) clearTimeout(timer.current);
      if (hasMore) timer.current = setTimeout(() => fetchAll(boardId, page + 1), 50);
    },
    [boardId],
  );

  useEffect(() => {
    fetchAll(boardId);
    return () => reset();
  }, [boardId]);

  return (
    <>
      <Header title={boardName} withBack RightComponent={<PostCreateButton />} />
      <PageBody>
        <Virtuoso
          style={{ maxHeight: '100vh' }}
          endReached={loadMore(hasMore, page)}
          overscan={200}
          data={posts}
          itemContent={(index, post) => (
            <PostCard
              key={post.id}
              model={post}
              to={generatePath(PAGE_URL.PostDetail, { boardId, postId: post.id })}
            />
          )}
          emptyComponent={() => <EmptyList text="작성된 게시글이 없습니다." />}
        />
      </PageBody>
      <GNB />
    </>
  );
});

export default PageStoreHOC(<PostListPage />, { store: PageUiStoreImpl });
