import React, { useEffect, useRef } from 'react';

import { Nav } from './Nav';
import { PageUiStoreImpl } from './SettingPasswordPageUiStore';
import { GuideText, Input } from './styled';

import { PAGE_URL } from '@/configs/path';
import { Header, LayoutHOC } from '@/v2/components';
import { usePageUiStore } from '@/v2/hooks';

const SettingPasswordPage: React.FC = () => {
  const { setFormRef, reset } = usePageUiStore<PageUiStore.SettingPassword>();
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    setFormRef(formRef);

    return () => reset();
  }, []);

  return (
    <>
      <Header title="비밀번호 변경" mini withBack={PAGE_URL.Setting} RightComponent={null} />

      <form ref={formRef}>
        <Input id="current-password" name="current-password" label="현재 비밀번호" />
        <Input id="new-password" name="new-password" label="새 비밀번호" />
        <Input id="new-password-confirm" name="new-password-confirm" label="새 비밀번호 확인" />
      </form>

      <GuideText>
        * 새로운 비밀번호는 8자리 이상의 비밀번호를 입력하세요.
        <br />
        (영어 + 숫자 + 특수문자 포함)
      </GuideText>
    </>
  );
};

export default LayoutHOC(SettingPasswordPage, { Nav, pageUiStore: PageUiStoreImpl });
