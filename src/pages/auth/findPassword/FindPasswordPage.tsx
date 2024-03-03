import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { PageUiStoreImpl } from './FindPasswordPageUiStore';

import {
  BodyScreen,
  Header,
  Input,
  PageBody,
  PageFooter,
  PageStoreHOC,
  NavButton,
  SelectInput,
} from '@/components';
import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores/RootStore';

const FindPasswordPage: React.FC = observer(() => {
  const { replace } = useHistory();
  const { findPassword } = usePageUiStore<PageUiStore.FindPassword>();
  const {
    ui: { alert },
  } = useRootStore();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<User.FindPasswordReqestDto>();

  if (
    (errors.name && errors.name.type === 'required') ||
    (errors.studentId && errors.studentId.type === 'required') ||
    (errors.email && errors.email.type === 'required')
  ) {
    alert({ message: '모든 항목을 다 입력해주세요.' });
  }

  const onSubmit = async (body: User.FindPasswordReqestDto) => {
    const { success } = (await findPassword(body)) as unknown as StoreAPI;
    if (success) {
      replace(PAGE_URL.SignIn);
      alert({ message: '이메일로 임시 비밀번호가 전송되었습니다. 로그인 이후 변경해주세요.' });
    } else {
      alert({ message: '잘못된 정보를 입력하였습니다.' });
    }
  };

  return (
    <>
      <Header title="게시판 생성" withBack={PAGE_URL.Board} />
      <PageBody>
        <BodyScreen>
          <Input
            name="email"
            label="이메일"
            placeholder="이메일을 입력하세요"
            required
            control={control}
          />
          <Input
            name="name"
            label="이름"
            placeholder="이름을 입력하세요"
            required
            control={control}
          />
          <Input
            name="studentId"
            label="학번"
            placeholder="학번을 입력하세요 (ex. 20201234)"
            required
            control={control}
          />
        </BodyScreen>
      </PageBody>

      <PageFooter>
        <NavButton onClick={handleSubmit(onSubmit)}>임시 비밀번호 생성</NavButton>
      </PageFooter>
    </>
  );
});

export default PageStoreHOC(<FindPasswordPage />, { store: PageUiStoreImpl });
