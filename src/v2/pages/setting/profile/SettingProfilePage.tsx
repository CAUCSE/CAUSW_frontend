import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { ContextMenu, ProfileImage } from './components';
import { Nav } from './Nav';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';
import { Header, Input, LayoutHOC } from '@/v2/components';

const SettingProfilePage: React.FC = observer(() => {
  const {
    auth: { me, fetch },
  } = useRootStore();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header title="개인정보 관리" mini withBack={PAGE_URL.Setting} RightComponent={ContextMenu} />

      <form>
        <ProfileImage defaultSrc={me?.profileImage} />
        <Input id="ipt-email" label="이메일" name="email" defaultValue={me?.email} disabled />
        <Input id="ipt-name" label="이름" name="name" defaultValue={me?.name} disabled />
        <Input id="ipt-studentId" label="학번" name="studentId" defaultValue={me?.studentId} />
      </form>
    </>
  );
});

export default LayoutHOC(SettingProfilePage, { Nav });
