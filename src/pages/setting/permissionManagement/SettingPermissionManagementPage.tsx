import { observer } from 'mobx-react-lite';

import { BodyScreen, GNB, Header, PageBody, PageStoreHOC } from '@/components';
import { PAGE_URL } from '@/configs/path';

const PermissionManagementPage: React.FC = observer(() => {
  return (
    <>
      <Header mini title="권한 관리" withBack={PAGE_URL.Setting} RightComponent={null} />
      <PageBody>
        <BodyScreen></BodyScreen>
      </PageBody>
      <GNB />
    </>
  );
});

export default PageStoreHOC(<PermissionManagementPage />);
