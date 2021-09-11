import * as React from 'react';
import styled, { css } from 'styled-components';

import { SigninWrapper, CommonInput, SubmitButton } from '../../components/signin/SigninComponents.js';
import Header from '../../components/signin/header.js';

export default function PageSignIn() {
  return (
    <div>
      <Header />
      <SigninWrapper>
        <CommonInput
          title="아이디"
          placeholder="아이디를 입력하세요"
          caption="아이디 중복확인을 해주세요."
        ></CommonInput>
        <CommonInput
          title="비밀번호"
          placeholder="비밀번호를 입력하세요"
          caption="6자리 이상 비밀번호를 입력해주세요"
        ></CommonInput>
        <CommonInput
          title="비밀번호 확인"
          placeholder="비밀번호를 입력하세요"
          caption="비밀번호가 일치하지 않습니다"
        ></CommonInput>
        <CommonInput title="이름" placeholder="이름을 입력하세요" caption="이름을 입력해주세요"></CommonInput>
        <CommonInput
          title="입학년도"
          placeholder="입학년도 6자리 (ex.202003)"
          caption="입학년도를 입력해주세요"
        ></CommonInput>
        <CommonInput title="학번" placeholder="학번을 입력하세요" caption="학번을 입력해주세요"></CommonInput>
        <SubmitButton> 가입하기 </SubmitButton>
      </SigninWrapper>
    </div>
  );
}
