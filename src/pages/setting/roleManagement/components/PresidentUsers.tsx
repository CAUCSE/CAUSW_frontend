import { observer } from 'mobx-react-lite';

import { AutorenewLink, Box, Row, Title, UserName } from './styled';

import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

export const PresidentUsers: React.FC = observer(() => {
  const { presidentUsers } = usePageUiStore<PageUiStore.SettingRoleManagement>();

  return (
    <Box>
      <Title>학생회장</Title>
      {presidentUsers ? (
        <Row>
          <UserName model={presidentUsers} />
          <AutorenewLink pathname={PAGE_URL.SettingRoleAlumni} state={{ user: presidentUsers }} />
        </Row>
      ) : null}
    </Box>
  );
});
