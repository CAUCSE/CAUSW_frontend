import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

import { AddLink, AutorenewLink, Box, RemoveButton, Row, Title, UserName } from './styled';

import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

export const LeaderCircleUsers: React.FC = observer(() => {
  const { leaderCircleUsers, deleteCircleModal } =
    usePageUiStore<PageUiStore.SettingRoleManagement>();
  const handleOpendeleteRuleModal = useCallback(
    (target: Model.User, circleIndex: number) => () => {
      deleteCircleModal.open('leaderCircleUsers', target, circleIndex);
    },
    [],
  );

  return (
    <Box>
      <AddLink to={PAGE_URL.CircleAdd} />
      <Title>동아리장 명단</Title>
      {leaderCircleUsers.map(
        user =>
          user.circleIds?.map((circleId, index) => (
            <Row key={circleId}>
              <UserName
                model={user}
                withCircleName={user.circleNames ? user.circleNames[index] : undefined}
              />
              <AutorenewLink
                pathname={PAGE_URL.SettingRoleLeaderCircle}
                state={{ user, circleIndex: index }}
              />
              <RemoveButton onClick={handleOpendeleteRuleModal(user, index)} />
            </Row>
          )),
      )}
    </Box>
  );
});
