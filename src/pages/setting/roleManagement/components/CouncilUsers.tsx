import { observer } from 'mobx-react-lite';

import { AddLink, Box, RemoveButton, Row, Title, UserName } from './styled';

import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

export const CouncilUsers: React.FC = observer(() => {
  const { councilUsers } = usePageUiStore<PageUiStore.SettingRoleManagement>();

  return (
    <Box>
      <AddLink to={PAGE_URL.SettingRoleCounil} />
      <Title>학생회 명단</Title>
      {councilUsers.map(user => (
        <Row key={user.id}>
          <UserName model={user} />
          <RemoveButton model={user} />
        </Row>
      ))}
    </Box>
  );
});
