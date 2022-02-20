import { useCallback, useEffect, useRef } from 'react';

import { HistoryCommentCard } from './components';
import { PageUiStoreImpl } from './HistoryCommentPageUiStore';

import { BodyScreen, GNB, Header, InfinityFrame, PageBody, PageStoreHOC } from '@/components';
import { usePageUiStore } from '@/hooks';

const HistoryCommentPage: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { fetch, comments, hasMore, page } = usePageUiStore<PageUiStore.HistroyComment>();
  const loadMore = useCallback(
    (hasMore: boolean, page: number) => () => hasMore && fetch(page + 1),
    [],
  );

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header title="내가 쓴 댓글" mini withBack RightComponent={null} />
      <PageBody>
        <BodyScreen ref={ref}>
          <InfinityFrame<Model.HistoryComment>
            bodyRef={ref}
            loadMore={loadMore(hasMore, page)}
            data={comments}
            ItemComponent={(index, comment) => (
              <HistoryCommentCard key={comment.id} model={comment} />
            )}
          />
        </BodyScreen>
      </PageBody>
      <GNB />
    </>
  );
};

export default PageStoreHOC(<HistoryCommentPage />, { store: PageUiStoreImpl });
