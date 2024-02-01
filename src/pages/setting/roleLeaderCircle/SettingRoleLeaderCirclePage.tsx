import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';

import { PageUiStoreImpl } from './SettingRoleLeaderCirclePageUiStore';
import { H2, H3, Role } from './styeld';
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

const SettingRoleLeaderCirclePage: React.FC = observer(() => {
  const { state } = useLocation<{ user: Model.User; circleIndex: number }>();
  const { replace } = useHistory();
  const {
    ui: { alert },
  } = useRootStore();
  const { reset, searchUserModal } = usePageUiStore<PageUiStore.SettingRoleLeaderGrade>();
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
    if (!state?.user) replace(PAGE_URL.Home);
    return () => reset();
  }, [state]);

  return (
    <>
      <Header
        mini
        title="동아리장 변경"
        withBack={PAGE_URL.SettingRoleManagement}
        RightComponent={null}
      />
      <PageBody>
        <BodyScreen>
          <H2>위임할 권한</H2>
          <Role>
            [ {state.user.circleNames ? state.user.circleNames[state.circleIndex] : ''} ] 동아리장
            <H3>기존 동아리장 정보</H3>
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

export default PageStoreHOC(<SettingRoleLeaderCirclePage />, {
  store: PageUiStoreImpl,
});
