import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { PageUiStoreImpl } from './SettingRoleCouncilPageUiStore';
import { Role, SubTitle } from './styeld';
import { SubmitButton } from './SubmitButton';

import {
  BodyScreen,
  Header,
  PageBody,
  PageStoreHOC,
  SearchedUser,
  SearchInput,
  SearchUserModal,
} from '@/components';
import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores';
import { UserRoleCodes } from '@/stores/models/UserModel';

interface FormBody {
  name: string;
}

const SettingRoleCouncilPage: React.FC = observer(() => {
  const {
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
    return () => reset();
  }, []);

  return (
    <>
      <Header
        mini
        title="학생회 추가"
        withBack={PAGE_URL.SettingRoleManagement}
        RightComponent={null}
      />
      <PageBody>
        <BodyScreen>
          <SubTitle>위임할 권한</SubTitle>
          <Role>{UserRoleCodes['COUNCIL']}</Role>
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
      <SubmitButton role="COUNCIL" />

      <SearchUserModal />
    </>
  );
});

export default PageStoreHOC(<SettingRoleCouncilPage />, {
  store: PageUiStoreImpl,
});
