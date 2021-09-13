import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { PAGE_URL } from 'configs/path';
import { AuthButton } from 'components/auth/AuthButton';
import * as S from './styled';

export const PageSignIn: React.FC = React.memo(() => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (body: any) => console.debug(body);

  return (
    <S.Container>
      <S.Logo />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <S.InputRow>
              <S.AuthInput {...field} type="email" placeholder="아이디" />
              <S.EmailIcon />
              {errors.email && <span role="alert">{errors.email.message}</span>}
            </S.InputRow>
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <S.InputRow>
              <S.AuthInput {...field} type="password" placeholder="비밀번호" />
              <S.PasswordIcon />
              {errors.password && <span role="alert">{errors.password.message}</span>}
            </S.InputRow>
          )}
        />
        <Controller
          name="auto"
          control={control}
          render={({ field }) => <S.AuthCheck {...field} label="자동로그인" />}
        />
        <AuthButton type="submit">로그인</AuthButton>
      </form>

      <S.SubMenu>
        <S.Menu to={PAGE_URL.SignUp}>회원가입</S.Menu>
        <S.Menu to="#">ID찾기</S.Menu>
        <S.Menu to="#">PW찾기</S.Menu>
      </S.SubMenu>
    </S.Container>
  );
});
