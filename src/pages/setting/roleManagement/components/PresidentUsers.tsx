import { observer } from 'mobx-react-lite';

import { Box, Row, Title, UserName } from './styled';

import { usePageUiStore } from '@/hooks';

export const PresidentUsers: React.FC = observer(() => {
  const { presidentUsers } = usePageUiStore<PageUiStore.SettingRoleManagement>();

  return (
    <Box>
      <Title>학생회장</Title>
      {presidentUsers[0] ? (
        <Row>
          <UserName model={presidentUsers[0]} />
        </Row>
      ) : null}
    </Box>
  );
});
