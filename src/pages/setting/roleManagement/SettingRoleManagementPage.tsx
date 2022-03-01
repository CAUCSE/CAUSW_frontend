import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import {
  CouncilUsers,
  DeleteRuleModal,
  LeaderAlumni,
  LeaderCircleUsers,
  LeaderGradeUsers,
} from './components';
import { PageUiStoreImpl } from './SettingRoleManagementPageUiStore';

import { BodyScreen, GNB, Header, PageBody, PageStoreHOC, UserInfoModal } from '@/components';
import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

const PermissionManagementPage: React.FC = observer(() => {
  const { fetch, reset } = usePageUiStore<PageUiStore.SettingRoleManagement>();

  useEffect(() => {
    fetch();
    return () => reset();
  }, []);

  return (
    <>
      <Header mini title="권한 관리" withBack={PAGE_URL.Setting} RightComponent={null} />
      <PageBody>
        <BodyScreen>
          <CouncilUsers />
          <LeaderGradeUsers />
          <LeaderCircleUsers />
          <LeaderAlumni />
        </BodyScreen>
      </PageBody>
      <GNB />

      <UserInfoModal />
      <DeleteRuleModal />
    </>
  );
});

export default PageStoreHOC(<PermissionManagementPage />, { store: PageUiStoreImpl });
