import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';

import { HistoryCommentCard } from './components';
import { PageUiStoreImpl } from './HistoryCommentPageUiStore';

import { GNB, Header, InfinityFrame, PageBody, PageStoreHOC } from '@/components';
import { usePageUiStore } from '@/hooks';

const HistoryCommentPage: React.FC = observer(() => {
  const { fetch, reset, comments, hasMore, page } = usePageUiStore<PageUiStore.HistroyComment>();
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
      <Header title="내가 쓴 댓글" mini withBack RightComponent={null} />
      <PageBody>
        <InfinityFrame<Model.HistoryComment>
          loadMore={loadMore(hasMore, page)}
          data={comments}
          ItemComponent={(index, comment) => (
            <HistoryCommentCard key={comment.id} model={comment} />
          )}
        />
      </PageBody>
      <GNB />
    </>
  );
});

export default PageStoreHOC(<HistoryCommentPage />, { store: PageUiStoreImpl });
