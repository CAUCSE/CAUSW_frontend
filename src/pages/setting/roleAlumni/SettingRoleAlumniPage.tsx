import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';

import { PageUiStoreImpl } from './SettingRoleAlumniPageUiStore';
import { Role, H2, H3 } from './styeld';
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

interface FormBody {
  name: string;
}

const SettingRoleAlumniPage: React.FC = observer(() => {
  const { state } = useLocation<{ user: Model.User }>();
  const { replace } = useHistory();
  const {
    ui: { alert },
  } = useRootStore();
  const { reset, searchUserModal } = usePageUiStore<PageUiStore.SettingRoleAlumni>();
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
    if (!state) replace(PAGE_URL.Home);
    return () => reset();
  }, [state]);

  return (
    <>
      <Header
        mini
        title="동문회장 변경"
        withBack={PAGE_URL.SettingRoleManagement}
        RightComponent={null}
      />
      <PageBody>
        <BodyScreen>
          <H2>위임할 권한</H2>
          <Role>
            동문회장
            <H3>기존 동문회장 정보</H3>
            이름: {state?.user.name}
            <br />
            {state?.user.studentId ? (
              <>
                학번: {state?.user.studentId}
                <br />
              </>
            ) : null}
            메일: {state?.user.email}
          </Role>
          <H2>피위임인 지정</H2>
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

export default PageStoreHOC(<SettingRoleAlumniPage />, {
  store: PageUiStoreImpl,
});
