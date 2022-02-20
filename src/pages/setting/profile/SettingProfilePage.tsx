import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { ContextMenu, ProfileImage } from './components';
import { FormBody, PageUiStoreImpl } from './SettingProfilePageUiStore';

import { BodyScreen, Header, Input, PageBody, PageFooter, PageStoreHOC } from '@/components';
import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores/RootStore';
import { NavButton } from '@/v2/components';

const SettingProfilePage: React.FC = observer(() => {
  const {
    auth: { me, fetch },
  } = useRootStore();
  const { reset, submitDisabled, update } = usePageUiStore<PageUiStore.SettingProfile>();
  const { handleSubmit, control, setValue } = useForm();
  const onSubmit = async (body: FormBody) => {
    const { success, message } = (await update(body)) as unknown as StoreAPI;

    if (success) alert('개인정보가 변경되었습니다.');
    else if (message) alert(message);
  };

  useEffect(() => {
    fetch();
    return () => reset();
  }, []);

  useEffect(() => {
    if (me) {
      setValue('email', me.email);
      setValue('name', me.name);
      setValue('studentId', me.studentId);
    }
  }, [me]);

  return (
    <>
      <Header
        title="개인정보 관리"
        mini
        withBack={PAGE_URL.Setting}
        RightComponent={<ContextMenu />}
      />

      <PageBody>
        <BodyScreen>
          <ProfileImage />
          <Input name="email" label="이메일" disabled control={control} />
          <Input name="name" label="이름" disabled control={control} />
          <Input name="studentId" label="학번" control={control} />
        </BodyScreen>
      </PageBody>

      <PageFooter>
        <NavButton onClick={handleSubmit(onSubmit)} disabled={submitDisabled}>
          개인정보 변경
        </NavButton>
      </PageFooter>
    </>
  );
});

export default PageStoreHOC(<SettingProfilePage />, { store: PageUiStoreImpl });
