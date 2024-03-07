import { observer } from 'mobx-react-lite';

import { Box, Row, Title, UserName } from './styled';

import { usePageUiStore } from '@/hooks';

export const PresidentUsers: React.FC = observer(() => {
  const { presidentUser } = usePageUiStore<PageUiStore.SettingRoleManagement>();

  return (
    <Box>
      <Title>학생회장</Title>
      {presidentUser[0] ? (
        <Row>
          <UserName model={presidentUser[0]} />
        </Row>
      ) : null}
    </Box>
  );
});
