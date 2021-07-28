import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useRootStore } from '../../stores/RootStore';
import { ReqSignIn } from '../../@types/Auth';

export const PageSignIn: React.FC = React.memo(() => {
  // 1. 유효성 검사
  // const {email, password} = data;
  // if(emailRex.test(email)) 이메일이 이메일 양식인지
  // if(passwordRex.test(password)) 비밀번호가 비밀번호 양식인지

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
      <div>
        <label htmlFor="email">email</label>
        <input
          id="email"
          {...register('email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '이메일 양식을 확인해주세요.',
            },
          })}
          type="email"
        />
        {errors.email && <span role="alert">{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          id="password"
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            // TODO: 비밀번호 패턴 찾아서 넣기
            // pattern: {
            //   value: /\S+@\S+\.\S+/,
            //   message: '이메일 양식을 확인해주세요.',
            // },
          })}
          type="password"
        />
        {errors.password && <span role="alert">{errors.password.message}</span>}
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
});
