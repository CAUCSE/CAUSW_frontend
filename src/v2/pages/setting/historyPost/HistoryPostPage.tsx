import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';

import { HistoryPostCard } from './HistoryPostCard';
import { PageUiStoreImpl } from './HistoryPostPageUiStore';

import { Header, InfinityFrame, LayoutHOC } from '@/v2/components';
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
        ItemComponent={(index, post) => <HistoryPostCard key={post.id} model={post} />}
      />
    </>
  );
});

export default LayoutHOC(HistoryPostPage, { pageUiStore: PageUiStoreImpl });
