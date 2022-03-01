import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

import { AddLink, Box, RemoveButton, Row, Title, UserName } from './styled';

import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

export const LeaderGradeUsers: React.FC = observer(() => {
  const { deleteRuleModal, leaderGradeUsers } = usePageUiStore<PageUiStore.SettingRoleManagement>();
  const handleOpenDeleteRuleModal = useCallback(
    (target: Model.User) => () => deleteRuleModal.open('leaderGradeUsers', target),
    [],
  );

  return (
    <Box>
      <AddLink to={PAGE_URL.SettingRoleLeaderGrade} />
      <Title>학년대표 명단</Title>
      {leaderGradeUsers.map(user => (
        <Row key={user.id}>
          <UserName model={user} />
          <RemoveButton onClick={handleOpenDeleteRuleModal(user)} />
        </Row>
      ))}
    </Box>
  );
});
