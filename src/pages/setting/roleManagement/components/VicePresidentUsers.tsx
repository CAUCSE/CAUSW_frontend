import { observer } from 'mobx-react-lite';

import { Box, Row, Title, UserName, ChangeLink } from './styled';

import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

export const VicePresidentUsers: React.FC = observer(() => {
  const { vicePresidentUsers } = usePageUiStore<PageUiStore.SettingRoleManagement>();

  return (
    <Box>
      <ChangeLink pathname={PAGE_URL.SettingRoleVicePresident} />
      <Title>부학생회장</Title>
      {vicePresidentUsers[0] ? (
        <Row>
          <UserName model={vicePresidentUsers[0]} />
        </Row>
      ) : null}
    </Box>
  );
});
