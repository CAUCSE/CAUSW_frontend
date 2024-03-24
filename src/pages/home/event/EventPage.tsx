import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { PageUiStoreImpl } from './EventPageUiStore';

import {
  BodyScreen,
  ErrorMessage,
  Header,
  Input,
  PageBody,
  PageFooter,
  PageStoreHOC,
  PasswordInput,
  NavButton,
  Title,
} from '@/components';
import { PAGE_URL } from '@/configs/path';
import { useAuthRedirect, usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores';
import { passwordReg, emailReg } from '@/utils';

const EventPage: React.FC = observer(() => {
  const { replace } = useHistory();
  const {
    ui: { alert },
  } = useRootStore();
  const { submitDisabled, isDuplicatedEmail, chekedEmail, signUp } =
    usePageUiStore<PageUiStore.SignUp>();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm();
  const password = watch('password');
  const onSubmit = async (body: User.CreateDto) => {
    body.profileImage = null;
    const { success, message } = (await signUp(body)) as unknown as StoreAPI;

    if (success) {
      replace(PAGE_URL.SignIn);
      alert({ message: '회원가입 되었습니다. 로그인 후 학부인증을 진행하세요.' });
    } else if (message) {
      alert({ message });
    }
  };

  useEffect(() => {
    if (isDuplicatedEmail) trigger('email');
  }, [isDuplicatedEmail]);

  const state = 'APPLICATION';

  return (
    <>
      <Header withBack title="간식 배부 행사 신청하기" mini RightComponent={null} />
      <PageBody>
        <BodyScreen>
          {state === 'APPLICATION' ? (
            <Container>
              <PreventionImg src="/images/empty.png" alt="Empty list logo" />
              <br />
              <BigTitle>신청 완료!</BigTitle>
              <div>행사 당일에 해당 페이지를</div>
              <div>보여주시면 됩니다.</div>
            </Container>
          ) : null}
        </BodyScreen>
      </PageBody>
      <PageFooter>
        <NavButton onClick={handleSubmit(onSubmit)} disabled={state === 'APPLICATION'}>
          신청하기
        </NavButton>
      </PageFooter>
    </>
  );
});

const Container = styled.div`
  position: absolute;
  left: 0px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PreventionImg = styled.img`
  width: 200px;
  animation: rotate_image 6s linear infinite;
  transform-origin: 50% 50%;
  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const BigTitle = styled(Title)`
  font-size: 25px;
  margin-bottom: 15px;
`;

export default PageStoreHOC(<EventPage />, { store: PageUiStoreImpl });
