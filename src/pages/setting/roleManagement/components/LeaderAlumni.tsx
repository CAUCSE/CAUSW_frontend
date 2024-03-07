import { observer } from 'mobx-react-lite';

import { AutorenewLink, Box, Row, Title, UserName } from './styled';

import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

export const LeaderAlumni: React.FC = observer(() => {
  const { leaderAlumni } = usePageUiStore<PageUiStore.SettingRoleManagement>();

  return (
    <Box>
      <Title>동문회장</Title>
      {leaderAlumni[0] ? (
        <Row>
          <UserName model={leaderAlumni[0]} />
          <AutorenewLink pathname={PAGE_URL.SettingRoleAlumni} state={{ user: leaderAlumni }} />
        </Row>
      ) : null}
    </Box>
  );
});
