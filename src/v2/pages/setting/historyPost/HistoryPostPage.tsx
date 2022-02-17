import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';
import { generatePath } from 'react-router-dom';

import { PageUiStoreImpl } from './HistoryPostPageUiStore';

import { PAGE_URL } from '@/configs/path';
import { Header, InfinityFrame, LayoutHOC, PostCard } from '@/v2/components';
import { usePageUiStore } from '@/v2/hooks';

const HistoryPostPage: React.FC = observer(() => {
  const { fetch, posts, hasMore, page } = usePageUiStore<PageUiStore.HistroyPost>();
  const loadMore = useCallback((hasMore: boolean, page: number) => () => hasMore && fetch(page + 1), []);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header title="내가 쓴 글" mini withBack RightComponent={null} />
      <InfinityFrame
        loadMore={loadMore(hasMore, page)}
        data={posts}
        ItemComponent={(index, post) => (
          <PostCard
            key={post.id}
            model={post}
            to={generatePath(PAGE_URL.PostDetail, { boardId: '1', postId: post.id })}
          />
        )}
      />
    </>
  );
});

export default LayoutHOC(HistoryPostPage, { pageUiStore: PageUiStoreImpl });
