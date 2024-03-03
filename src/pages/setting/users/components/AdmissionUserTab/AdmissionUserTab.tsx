import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { AdmissionUserRow } from './AdmissionUserRow';
import { TabPanel, TabPanelProps } from '../TabPanel';

import { InfinityFrame, SearchInput, SearchBody } from '@/components';
import { usePageUiStore } from '@/hooks';

interface FormBody {
  name: string;
}

export const AdmissionUserTab: React.FC<TabPanelProps> = observer(props => {
  const {
    admissionTab: { fetch, reset, hasMore, page, users },
  } = usePageUiStore<PageUiStore.SettingUsers>();
  const loadMore = useCallback(
    (hasMore: boolean, page: number) => () => hasMore && fetch(null, page + 1),
    [],
  );

  const { handleSubmit, control, setValue } = useForm<FormBody>({
    defaultValues: {
      name: '',
    },
  });

  const onSearch = async (body: FormBody) => {
    reset();
    if (props.index === props.value) fetch(body.name === '' ? null : body.name);
  };

  useEffect(() => {
    if (props.index === props.value) fetch();
    return () => reset();
  }, [props.value]);

  return (
    <>
      <SearchBody>
        <form onSubmit={handleSubmit(onSearch)}>
          <SearchInput<FormBody>
            id="search-user-ipt"
            name="name"
            placeholder="유저 이름으로 검색"
            control={control}
            rules={{ required: false }}
          />
        </form>
      </SearchBody>

      <TabPanel {...props}>
        <InfinityFrame<Model.AdmissionUser>
          loadMore={loadMore(hasMore, page)}
          data={users}
          ItemComponent={(index, user) => <AdmissionUserRow key={user.id} model={user} />}
        />
      </TabPanel>
    </>
  );
});
