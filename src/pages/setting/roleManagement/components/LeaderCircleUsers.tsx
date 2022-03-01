import { observer } from 'mobx-react-lite';

import { AddLink, AutorenewLink, Box, RemoveButton, Row, Title, UserName } from './styled';

import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

export const LeaderCircleUsers: React.FC = observer(() => {
  const { leaderCircleUsers } = usePageUiStore<PageUiStore.SettingRoleManagement>();

  return (
    <Box>
      <AddLink to={PAGE_URL.SettingRoleCircle} />
      <Title>소모임장 명단</Title>
      {leaderCircleUsers.map(user => (
        <Row key={user.id}>
          <UserName model={user} />
          <AutorenewLink to={'#'} />
          <RemoveButton model={user} />
        </Row>
      ))}
    </Box>
  );
});
