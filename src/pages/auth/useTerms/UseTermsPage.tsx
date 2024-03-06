import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, generatePath } from 'react-router-dom';

import { BodyScreen, Header, PageBody, PageFooter, PageStoreHOC, NavButton } from '@/components';
import { PAGE_URL } from '@/configs/path';

const UseTermsPage: React.FC = observer(() => {
  const {
    replace,
    push,
    location: { pathname },
  } = useHistory();
  const { handleSubmit, formState } = useForm<User.FindPasswordReqestDto>();
  const { isSubmitting } = formState;

  const onSubmit = async () => {
    if (pathname === PAGE_URL.SignUp) replace(PAGE_URL.SignIn);
    else push(generatePath(pathname));
  };

  return (
    <>
      <Header title="이용 약관" />
      <PageBody>
        <BodyScreen>어쩌고 저쩌고</BodyScreen>
      </PageBody>

      <PageFooter>
        <NavButton disabled={isSubmitting} onClick={handleSubmit(onSubmit)}>
          위 약관을 모두 확인했습니다.
        </NavButton>
      </PageFooter>
    </>
  );
});

export default PageStoreHOC(<UseTermsPage />);
