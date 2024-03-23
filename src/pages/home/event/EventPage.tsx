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

  useAuthRedirect();

  return (
    <>
      <Header withBack title="회원가입" mini RightComponent={null} />
      <PageBody>
        <BodyScreen>
          <br />
          <Input
            name="email"
            label="이메일"
            placeholder="이메일 형식에 맞게 입력하세요."
            required
            control={control}
            rules={{
              required: '이메일를 입력해주세요.',
              validate: value => {
                // 이메일 유효성 검사는 진행했고,
                if (isDuplicatedEmail === true) {
                  // 검사했던 이메일과 지금 입력된 이메일이 같은 경우 에러
                  if (chekedEmail === value) return '중복된 이메일입니다.';
                  else return true;
                }
                return true;
              },
              pattern: {
                value: emailReg,
                message: '이메일 형식에 맞게 입력하세요.',
              },
            }}
          />
          {errors.email ? <ErrorMessage>{errors.email?.message}</ErrorMessage> : null}

          <PasswordInput
            name="password"
            label="비밀번호"
            placeholder="8자리 이상, 영어/숫자/특수문자 조합"
            required
            control={control}
            rules={{
              required: '비밀번호를 입력해주세요.',
              pattern: {
                value: passwordReg,
                message: '8자리 이상의 비밀번호를 입력하세요.<br/>(영어 + 숫자 + 특수문자)',
              },
            }}
          />
          {errors.password ? (
            <ErrorMessage dangerouslySetInnerHTML={{ __html: errors.password?.message }} />
          ) : null}

          <PasswordInput
            name="passwordConfirm"
            label="비밀번호 확인"
            placeholder="지정한 비밀번호를 다시 입력하세요."
            required
            control={control}
            rules={{
              required: '비밀번호를 입력해주세요.',
              validate: value => value === password || '비밀번호가 일치하지 않습니다.',
            }}
          />
          {errors.passwordConfirm ? (
            <ErrorMessage>{errors.passwordConfirm?.message}</ErrorMessage>
          ) : null}

          <Input
            name="name"
            label="이름"
            placeholder="실명이 아닌 경우 승인이 거절될 수 있습니다."
            required
            control={control}
            rules={{ required: '이름을 입력해주세요.' }}
          />
          {errors.name ? <ErrorMessage>{errors.name?.message}</ErrorMessage> : null}

          <Input
            name="admissionYear"
            type="number"
            label="입학년도"
            placeholder="입학년도 4자리를 입력하세요. (ex.2020)"
            required
            control={control}
            rules={{
              required: '입학년도를 입력해주세요.',
              minLength: {
                value: 4,
                message: '4자리 입학년도를 입력해주세요.',
              },
              maxLength: {
                value: 4,
                message: '4자리 입학년도를 입력해주세요.',
              },
            }}
          />
          {errors.admissionYear ? (
            <ErrorMessage>{errors.admissionYear?.message}</ErrorMessage>
          ) : null}

          <Input
            name="studentId"
            type="number"
            label="학번"
            placeholder="8자리 학번을 입력하세요. (ex.20201234)"
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

export const Message = styled.div`
  text-align: right;
  color: #ff7473;
  font-size: 12px;
  line-height: 21px;
`;

export default PageStoreHOC(<EventPage />, { store: PageUiStoreImpl });
