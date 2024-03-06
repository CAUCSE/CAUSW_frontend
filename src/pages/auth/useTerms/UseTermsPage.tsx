import { observer } from 'mobx-react-lite';
import React from 'react';
import { useHistory, generatePath } from 'react-router-dom';

import { PageUiStoreImpl } from './UseTermsPageUiStore';

import { BodyScreen, Header, PageBody, PageFooter, PageStoreHOC, NavButton } from '@/components';
import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';

const UseTermsPage: React.FC = observer(() => {
  const { replace, push } = useHistory();
  const {
    auth: { isSignIn },
  } = useRootStore();

  const onSubmit = () => {
    if (!isSignIn) replace(PAGE_URL.SignIn);
    else push(generatePath(PAGE_URL.Setting));
  };

  return (
    <>
      <Header title="이용 약관" />
      <PageBody>
        <BodyScreen>어쩌고 저쩌고</BodyScreen>
      </PageBody>

      <PageFooter>
        <NavButton onClick={onSubmit}>위 약관을 모두 확인했습니다.</NavButton>
      </PageFooter>
    </>
  );
});

export default PageStoreHOC(<UseTermsPage />, { store: PageUiStoreImpl });
