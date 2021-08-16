import React, { useCallback, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useRootStore } from '../../stores/RootStore';
import { ReqSignUp } from '../../@types/Auth';
import { PAGE_URL } from '../../configs/path';
import { isPropertySignature } from 'typescript';

export const PageSignUp: React.FC = React.memo(()=> {
  const { auth } = useRootStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = useCallback(async (body: ReqSignUp) => {
    try {
      await auth.signUp(body);
      reset();
      location.href = PAGE_URL.SignIn;
    } catch (code) {
      if (code === 401) {
        alert('잘못된 값이 있는지 확인해 주세요');
      }
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">email</label>
        <input
        //TODO: email 중복 체크
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
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: '최소 8자, 최소 하나의 문자 및 하나의 숫자로 설정하세요',
            },
          })}
          type="password"
        />
        {errors.password && <span role="alert">{errors.password.message}</span>}
      </div>
      <div>
        <label htmlFor="passwordConfirm">passwordConfirm</label>
        <input
          id="passwordConfirm"
          type="password"
          {...register('passwordConfirm', {
            required: '비밀번호를 다시 입력해주세요.',
            validate: value =>
              value === password.current || "비밀번호가 일치하지 않습니다"
          })}
          
        />
        {errors.passwordConfirm && <span role="alert">{errors.passwordConfirm.message}</span>}
      </div>
      <div>
        <label htmlFor="name">name</label>
        <input
          id="name"
          {...register('name', {
            required: '이름을 입력해주세요.',
          })}
          type="name"
        />
        {errors.name && <span role="alert">{errors.name.message}</span>}
      </div>
      <div>
        <label htmlFor="admissionYear">admissionYear</label>
        <input
          id="admissionYear"
          {...register('admissionYear', {
            required: '입학년도를 입력해주세요.',
            pattern: {
              value: /^[1-2]{1}\d{5}$/,
              message: '입학년도를 형식(6자리)에 맞게 입력해 주세요'
            }
          })}
          type="admissionYear"
        />
        {errors.admissionYear && <span role="alert">{errors.admissionYear.message}</span>}
      </div>
      <div>
        <label htmlFor="studentId">studentId</label>
        <input
        //TODO: 학번 중복 체크
          id="studentId"
          {...register('studentId', {
            required: '학번을 입력해주세요.',
          })}
          type="studentId"
        />
        {errors.studentId && <span role="alert">{errors.studentId.message}</span>}
      </div>
      
      <button type="submit">SUBMIT</button>
    </form>
  );
})