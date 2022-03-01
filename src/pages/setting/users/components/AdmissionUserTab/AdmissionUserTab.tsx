import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';

import { TabPanel, TabPanelProps } from '../TabPanel';
import { AdmissionUserRow } from './AdmissionUserRow';

import { InfinityFrame } from '@/components';
import { usePageUiStore } from '@/hooks';

export const AdmissionUserTab: React.FC<TabPanelProps> = observer(props => {
  const {
    admissionTab: { fetch, reset, hasMore, page, users },
  } = usePageUiStore<PageUiStore.SettingUsers>();
  const loadMore = useCallback(
    (hasMore: boolean, page: number) => () => hasMore && fetch(page + 1),
    [],
  );

  useEffect(() => {
    if (props.index === props.value) fetch();
    return () => reset();
  }, [props.value]);

  return (
    <TabPanel {...props}>
      <InfinityFrame<Model.AdmissionUser>
        loadMore={loadMore(hasMore, page)}
        data={users}
        ItemComponent={(index, user) => <AdmissionUserRow key={user.id} model={user} />}
      />
    </TabPanel>
  );
});
