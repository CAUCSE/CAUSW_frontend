import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { SearchedUser, SearchUserModal, SubmitButton } from './components';
import { PageUiStoreImpl } from './SettingRoleDelegationPageUiStore';
import { Role, SubTitle } from './styeld';

import { BodyScreen, Header, PageBody, PageStoreHOC, SearchInput } from '@/components';
import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores';

interface FormBody {
  name: string;
}

const SettingRoleDelegationPage: React.FC = observer(() => {
  const {
    auth: { fetch, me },
    ui: { alert },
  } = useRootStore();
  const { reset, searchUserModal } = usePageUiStore<PageUiStore.SettingRoleDelegation>();
  const { handleSubmit, control, setValue } = useForm<FormBody>({
    defaultValues: {
      name: '',
    },
  });

  const onSearch = async (body: FormBody) => {
    const { success, message } = (await searchUserModal.fetch(body.name)) as unknown as StoreAPI;

    if (success) searchUserModal.open();
    else if (message) alert({ message });
    setValue('name', '');
  };

  useEffect(() => {
    fetch();
    return () => reset();
  }, []);

  return (
    <>
      <Header mini title="권한 위임" withBack={PAGE_URL.Setting} RightComponent={null} />
      <PageBody>
        <BodyScreen>
          <SubTitle>위임할 권한</SubTitle>
          <Role>{me?.roleTxt}</Role>
          <SubTitle>피위임인 지정</SubTitle>
          <form onSubmit={handleSubmit(onSearch)}>
            <SearchInput<FormBody>
              id="search-user-ipt"
              name="name"
              placeholder="유저 이름으로 검색"
              control={control}
              rules={{ required: true }}
            />
          </form>
          <SearchedUser />
        </BodyScreen>
      </PageBody>
      <SubmitButton />

      <SearchUserModal />
    </>
  );
});

export default PageStoreHOC(<SettingRoleDelegationPage />, {
  store: PageUiStoreImpl,
});
