import { observer } from 'mobx-react-lite';

import { Box, Row, Title, UserName, ChangeLink } from './styled';

import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

export const VicePresidentUsers: React.FC = observer(() => {
  const { vicePresidentUsers } = usePageUiStore<PageUiStore.SettingRoleManagement>();

  return (
    <Box>
      <Title>
        부학생회장
        <ChangeLink pathname={PAGE_URL.SettingRoleVicePresident} />
      </Title>
      {vicePresidentUsers ? (
        <Row>
          <UserName model={vicePresidentUsers} />
        </Row>
      ) : null}
    </Box>
  );
});
