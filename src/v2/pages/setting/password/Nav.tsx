import { NavWrapper } from './styled';

import { Button } from '@/v2/components';
import { usePageUiStore } from '@/v2/hooks';

export const Nav: React.FC = () => {
  usePageUiStore<PageUiStore.SettingPassword>();
  return (
    <NavWrapper>
      <Button>비밀번호 변경</Button>
    </NavWrapper>
  );
};
