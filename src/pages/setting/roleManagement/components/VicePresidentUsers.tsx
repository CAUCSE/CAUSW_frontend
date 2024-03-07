import { observer } from 'mobx-react-lite';

import { Box, Row, Title, UserName, ChangeLink } from './styled';

import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

export const VicePresidentUsers: React.FC = observer(() => {
  const { vicePresidentUser } = usePageUiStore<PageUiStore.SettingRoleManagement>();

  return (
    <Box>
      <ChangeLink pathname={PAGE_URL.SettingRoleVicePresident} />
      <Title>부학생회장</Title>
      {vicePresidentUser[0] ? (
        <Row>
          <UserName model={vicePresidentUser[0]} />
        </Row>
      ) : null}
    </Box>
  );
});
