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

  return (
    <>
      <Header withBack title="간식 배부 행사 신청하기" mini RightComponent={null} />
      <PageBody>
        <BodyScreen>
          <PreventionImg src="/images/empty.png" alt="Empty list logo" />
          <br />
        </BodyScreen>
      </PageBody>
      <PageFooter>
        <Message>
          회원가입 이후 로그인과 학부인증을 하셔야 <br /> 서비스를 이용할 수 있습니다
        </Message>
        <NavButton onClick={handleSubmit(onSubmit)} disabled={submitDisabled}>
          가입하기
        </NavButton>
      </PageFooter>
    </>
  );
});

const Message = styled.div`
  text-align: right;
  color: #ff7473;
  font-size: 12px;
  line-height: 21px;
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

export default PageStoreHOC(<EventPage />, { store: PageUiStoreImpl });
