import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { useRootStore } from '../../stores/RootStore';
import { ReqSignIn } from '../../@types/Auth';
import useInput from '../../hooks/useInput';
import { Link } from 'react-router-dom';

import AuthInput from '../../components/auth/AuthInput';
import { AuthContainer } from '../../components/auth/AuthContainer.js';
import { CheckBoxContainer, CheckBoxText } from '../../components/auth/CheckBox.js';
import { Image } from '../../assets/images/logo';
import { AuthButton } from '../../components/auth/AuthButton';

import { AuthIcon } from '../../components/auth/AuthIcon';
import EmailIcon from '../../assets/icons/email_icon.png';
import PWIcon from '../../assets/icons/password_icon.png';

export const PageAuth: React.FC = React.memo(() => {
  // 1. 유효성 검사
  // const {email, password} = data;
  // if(emailRex.test(email)) 이메일이 이메일 양식인지
  // if(passwordRex.test(password)) 비밀번호가 비밀번호 양식인지
  const [email, onChangeEmail, onResetEmail] = useInput('');
  const [password, onChangePW, onResetPW] = useInput('');
  const { auth } = useRootStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = useCallback(async (body: ReqSignIn) => {
    try {
      await auth.signIn(body);
      reset();
      // TODO: 메인페이지 이동
    } catch (code) {
      if (code === 401) {
        alert('이메일, 비밀번호를 확인해주세요.');
      }
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthContainer>
        <Image />
        <AuthEmail
          //id="email"
          {...register('email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '이메일 양식을 확인해주세요.',
            },
          })}
          type="email"
          value={email}
          onChange={onChangeEmail}
          onReset={onResetEmail}
          placeholder="아이디"
        >
          <AuthIcon width="12" height="12" src={EmailIcon} />
        </AuthEmail>
        {errors.email && <span role="alert">{errors.email.message}</span>}
        <AuthPW
          //id="password"
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            // TODO: 비밀번호 패턴 찾아서 넣기
            // pattern: {
            //   value: /\S+@\S+\.\S+/,
            //   message: '이메일 양식을 확인해주세요.',
            // },
          })}
          type="password"
          value={password}
          onChange={onChangePW}
          onReset={onResetPW}
          placeholder="비밀번호"
        />
        {errors.password && <span role="alert">{errors.password.message}</span>}
        <CheckBoxContainer>
          <input type="checkbox" />
          <CheckBoxText>자동로그인</CheckBoxText>
        </CheckBoxContainer>
        <AuthButton type="submit">로그인</AuthButton>
        <Link to="/signin">회원가입</Link>
      </AuthContainer>
    </form>
  );
});

const AuthEmail = styled(AuthInput)``;
const AuthPW = styled(AuthInput)``;
