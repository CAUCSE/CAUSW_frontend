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
  ErrorMessage,
} from '@/components';
import Loading from '@/components/Loading';
import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores/RootStore';
import { emailReg } from '@/utils';

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
    formState,
  } = useForm<User.FindPasswordReqestDto>();
  const { isSubmitting } = formState;

  const onSubmit = async (body: User.FindPasswordReqestDto) => {
    const { success } = (await findPassword(body)) as unknown as StoreAPI;
    if (success) {
      replace(PAGE_URL.SignIn);
      alert({ message: '이메일로 임시 비밀번호가 전송되었습니다.' });
    } else {
      alert({ message: '잘못된 정보를 입력하였습니다.' });
    }
  };

  return (
    <>
      <Header title="비밀번호 재발급" withBack={PAGE_URL.SignIn} />
      <PageBody>
        {isSubmitting ? (
          <Loading />
        ) : (
          <>
            <BodyScreen>
              <Input
                name="email"
                label="이메일"
                placeholder="이메일 형식에 맞게 입력하세요."
                required
                control={control}
                rules={{
                  required: '이메일를 입력해주세요.',
                  pattern: {
                    value: emailReg,
                    message: '이메일 형식에 맞게 입력하세요.',
                  },
                }}
              />
              {errors.email ? <ErrorMessage>{errors.email?.message}</ErrorMessage> : null}

              <Input
                name="name"
                label="이름"
                placeholder="이름을 입력하세요."
                required
                control={control}
                rules={{ required: '이름을 입력해주세요.' }}
              />
              {errors.name ? <ErrorMessage>{errors.name?.message}</ErrorMessage> : null}

              <Input
                name="studentId"
                label="학번"
                placeholder="학번을 입력하세요. (ex. 20201234)"
                required
                control={control}
                rules={{
                  required: '학번을 입력해주세요.',
                  minLength: {
                    value: 8,
                    message: '8자리 입학년도를 입력해주세요.',
                  },
                  maxLength: {
                    value: 8,
                    message: '8자리 입학년도를 입력해주세요.',
                  },
                }}
              />
              {errors.studentId ? <ErrorMessage>{errors.studentId?.message}</ErrorMessage> : null}
            </BodyScreen>
          </>
        )}
      </PageBody>

      <PageFooter>
        <NavButton disabled={isSubmitting} onClick={handleSubmit(onSubmit)}>
          임시 비밀번호 생성
        </NavButton>
      </PageFooter>
    </>
  );
});

export default PageStoreHOC(<FindPasswordPage />, { store: PageUiStoreImpl });
