import { observer } from 'mobx-react-lite';

import { Box, Row, Title, UserName } from './styled';

import { usePageUiStore } from '@/hooks';

export const VicePresidentUsers: React.FC = observer(() => {
  const { vicePresidentUsers } = usePageUiStore<PageUiStore.SettingRoleManagement>();

  return (
    <Box>
      <Title>부학생회장</Title>
      {vicePresidentUsers ? (
        <Row>
          <UserName model={vicePresidentUsers} />
        </Row>
      ) : null}
    </Box>
  );
});
