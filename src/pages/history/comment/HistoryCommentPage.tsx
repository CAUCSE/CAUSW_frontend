import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';

import { HistoryCommentCard } from './components/HistoryCommentCard';
import { PageUiStoreImpl } from './HistoryCommentPageUiStore';

import { GNB, Header, InfinityFrame, PageBody, PageStoreHOC } from '@/components';
import { DefaultEmptyComponent } from '@/components/ListBox';
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
        {comments.length === 0 ? <DefaultEmptyComponent comment="작성한 댓글이 없습니다" /> : null}
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
