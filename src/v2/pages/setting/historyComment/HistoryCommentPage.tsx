import { useCallback, useEffect } from 'react';

import { PageUiStoreImpl } from './HistoryCommentPageUiStore';

import { Header, InfinityFrame, LayoutHOC } from '@/v2/components';
import { usePageUiStore } from '@/v2/hooks';

const HistoryCommentPage: React.FC = () => {
  const { fetch, comments, hasMore, page } = usePageUiStore<PageUiStore.HistroyComment>();
  const loadMore = useCallback((hasMore: boolean, page: number) => () => hasMore && fetch(page + 1), []);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header title="내가 쓴 댓글" mini withBack RightComponent={null} />
      <InfinityFrame
        loadMore={loadMore(hasMore, page)}
        data={comments}
        ItemComponent={(index, comment) => <div>1</div>}
      />
    </>
  );
};

export default LayoutHOC(HistoryCommentPage, { pageUiStore: PageUiStoreImpl });
