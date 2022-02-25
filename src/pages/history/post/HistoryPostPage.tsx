import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';

import { HistoryPostCard } from './components';
import { PageUiStoreImpl } from './HistoryPostPageUiStore';

import { GNB, Header, InfinityFrame, PageBody, PageStoreHOC } from '@/components';
import { usePageUiStore } from '@/hooks';

const HistoryPostPage: React.FC = observer(() => {
  const { fetch, reset, posts, hasMore, page } = usePageUiStore<PageUiStore.HistroyPost>();
  const loadMore = useCallback(
    (hasMore: boolean, page: number) => () => hasMore && fetch(page + 1),
    [],
  );

  useEffect(() => {
    fetch();
    return () => reset();
  }, []);

  return (
    <>
      <Header title="내가 쓴 글" mini withBack RightComponent={null} />
      <PageBody>
        <InfinityFrame<Model.HistoryPost>
          loadMore={loadMore(hasMore, page)}
          data={posts}
          ItemComponent={(index, post) => <HistoryPostCard key={post.id} model={post} />}
        />
      </PageBody>
      <GNB />
    </>
  );
});

export default PageStoreHOC(<HistoryPostPage />, { store: PageUiStoreImpl });
