import { observer } from 'mobx-react-lite';
import React from 'react';

import { PageUiStoreImpl } from './NoPermissionPageUiStore';

import { BodyScreen, Header, PageBody, PageStoreHOC } from '@/components';
import { PAGE_URL } from '@/configs/path';

const NoPermissionPage: React.FC = observer(() => {
  return (
    <>
      <Header withBack={PAGE_URL.Home} title="경고" />
      <PageBody>
        <BodyScreen>접근 권한이 없습니다.</BodyScreen>
      </PageBody>
    </>
  );
});

export default PageStoreHOC(<NoPermissionPage />, { store: PageUiStoreImpl });
