import { ContextMenu } from './components';

import { Header, LayoutHOC } from '@/v2/components';

const SettingProfilePage: React.FC = () => {
  return (
    <>
      <Header title="개인정보 관리" mini withBack RightComponent={ContextMenu} />
    </>
  );
};

export default LayoutHOC(SettingProfilePage);
