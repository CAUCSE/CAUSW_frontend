import { observer } from 'mobx-react-lite';

import { AddLink, Box, RemoveButton, Row, Title, UserName } from './styled';

import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

export const LeaderGradeUsers: React.FC = observer(() => {
  const { leaderGradeUsers } = usePageUiStore<PageUiStore.SettingRoleManagement>();

  return (
    <Box>
      <AddLink to={PAGE_URL.SettingRoleGrade} />
      <Title>학년대표 명단</Title>
      {leaderGradeUsers.map(user => (
        <Row key={user.id}>
          <UserName model={user} />
          <RemoveButton model={user} />
        </Row>
      ))}
    </Box>
  );
});
