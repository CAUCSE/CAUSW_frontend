import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';

import { PageUiStoreImpl } from './SettingPasswordPageUiStore';
import { Form, GuideText, Input } from './styled';

import { PAGE_URL } from '@/configs/path';
import { Button, Header, LayoutHOC, NavButtonWrapper, PageWraaper } from '@/v2/components';
import { usePageUiStore } from '@/v2/hooks';

const SettingPasswordPage: React.FC = observer(() => {
  const { submitDisabled, reset, set, error, update } = usePageUiStore<PageUiStore.SettingPassword>();

  useEffect(() => {
    return () => reset();
  }, []);

  return (
    <PageWraaper>
      <Header title="비밀번호 변경" mini withBack={PAGE_URL.Setting} RightComponent={null} />

      <Form onSubmit={update}>
        <div style={{ flex: '1 0 0' }}>
          <Input
            id="ipt-originPassword"
            name="originPassword"
            label="현재 비밀번호"
            onChange={set('originPassword')}
            helperText={error.originPassword}
            error={!!error.originPassword}
          />
          <Input
            id="ipt-updatedPassword"
            name="updatedPassword"
            label="새 비밀번호"
            onChange={set('updatedPassword')}
            helperText={error.updatedPassword}
            error={!!error.updatedPassword}
          />
          <Input
            id="ipt-updatedPasswordConfirm"
            name="updatedPasswordConfirm"
            label="새 비밀번호 확인"
            onChange={set('updatedPasswordConfirm')}
            helperText={error.updatedPasswordConfirm}
            error={!!error.updatedPasswordConfirm}
          />
          <GuideText>
            * 새로운 비밀번호는 8자리 이상의 비밀번호를 입력하세요 (영어 + 숫자 + 특수문자 포함)
            <br />
            * 특수 문자: # ? ! @ $ % ^ & * -
            <br />
          </GuideText>
        </div>

        <NavButtonWrapper>
          <Button type="submit" disabled={submitDisabled}>
            개인정보 변경
          </Button>
        </NavButtonWrapper>
      </Form>
    </PageWraaper>
  );
});

export default LayoutHOC(SettingPasswordPage, { Nav: null, pageUiStore: PageUiStoreImpl });
