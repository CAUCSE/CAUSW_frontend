import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';

import { ContextMenu, ProfileImage } from './components';
import { PageUiStoreImpl } from './SettingProfilePageUiStore';
import { Form } from './styled';

import { PAGE_URL } from '@/configs/path';
import { Button, Header, Input, LayoutHOC, NavButtonWrapper, PageWraaper } from '@/v2/components';
import { usePageUiStore } from '@/v2/hooks';

const SettingProfilePage: React.FC = observer(() => {
  const { fetch, reset, me, set, update, submitDisabled } = usePageUiStore<PageUiStore.SettingProfile>();

  useEffect(() => {
    fetch();
    return () => reset();
  }, []);

  return (
    <PageWraaper>
      <Header title="개인정보 관리" mini withBack={PAGE_URL.Setting} RightComponent={ContextMenu} />

      <Form onSubmit={update}>
        <div style={{ flex: '1 0 0' }}>
          <ProfileImage defaultSrc={me?.profileImage} onChange={set('image')} />
          <Input id="ipt-email" label="이메일" name="email" defaultValue={me?.email} disabled />
          <Input id="ipt-name" label="이름" name="name" defaultValue={me?.name} disabled />
          <Input
            id="ipt-studentId"
            label="학번"
            name="studentId"
            defaultValue={me?.studentId}
            onChange={set('studentId')}
          />
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

export default LayoutHOC(SettingProfilePage, { Nav: null, pageUiStore: PageUiStoreImpl });
