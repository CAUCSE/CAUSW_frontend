import { observer } from 'mobx-react-lite';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { PageUiStoreImpl } from './PageUiStore';
import { SubmitButton } from './styled';

import {
  BodyScreen,
  ErrorMessage,
  Input,
  PageBody,
  PageFooter,
  PageStoreHOC,
  PasswordInput,
} from '@/components';
import { useAuthRedirect } from '@/hooks';
import { passwordReg } from '@/utils';
import { Header } from '@/v2/components';
import { usePageUiStore } from '@/v2/hooks';

const SignUpPage: React.FC = observer(() => {
  const { isDuplicatedEmail, chekedEmail, signUp } = usePageUiStore<PageUiStore.SignUp>();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch('password');

  useAuthRedirect();

  return (
    <>
      <Header withBack title="회원가입" mini RightComponent={null} />
      <PageBody>
        <BodyScreen>
          <br />
          <Input
            name="email"
            label="아이디"
            placeholder="아이디를 입력하세요"
            required
            control={control}
            rules={{
              required: '아이디를 입력해주세요.',
              validate: value => {
                // 이메일 유효성 검사는 진행했고,
                if (isDuplicatedEmail === true) {
                  // 검사했던 이메일과 지금 입력된 이메일이 같은 경우 에러
                  if (chekedEmail === value) return '중복된 아이디입니다.';
                  else return true;
                }

                return true;
              },
            }}
          />
          {errors.email ? <ErrorMessage>{errors.email?.message}</ErrorMessage> : null}

          <PasswordInput
            name="password"
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
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
            placeholder="비밀번호를 입력하세요"
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
            placeholder="이름을 입력하세요"
            required
            control={control}
            rules={{ required: '이름을 입력해주세요.' }}
          />
          {errors.name ? <ErrorMessage>{errors.name?.message}</ErrorMessage> : null}

          <Input
            name="admissionYear"
            type="number"
            label="입학년도"
            placeholder="입학년도 4자리 (ex.2020)"
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
            name="stuendId"
            type="number"
            label="학번"
            placeholder="학번을 입력하세요 (ex. 20201234)"
            control={control}
          />
        </BodyScreen>
      </PageBody>
      <PageFooter>
        <SubmitButton onClick={handleSubmit(signUp)}>가입하기</SubmitButton>
      </PageFooter>
    </>
  );
});

export default PageStoreHOC(<SignUpPage />, { store: PageUiStoreImpl });
