import { Header, LayoutHOC } from '@/v2/components';

const SettingPasswordPage: React.FC = () => {
  return (
    <>
      <Header title="비밀번호 변경" mini withBack RightComponent={null} />
    </>
  );
};

export default LayoutHOC(SettingPasswordPage);
