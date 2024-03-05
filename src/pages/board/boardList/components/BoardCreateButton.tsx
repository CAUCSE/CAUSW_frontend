import styled from '@emotion/styled';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { observer } from 'mobx-react-lite';
import { generatePath, useParams } from 'react-router-dom';

import { UniformLogo } from '@/assets';
import { ClearLink, RightButtonWrapper } from '@/components';
import { PAGE_URL, PostParams } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';

export const BoardCreateButton: React.FC = observer(() => {
  const {
    auth: { me },
  } = useRootStore();

  return (
    <>
      {me && (me.isAdmin || me.isCircleLeader || me.isPresidents) ? (
        <Wrapper to={generatePath(PAGE_URL.BoardCreate)}>
          <Icon fontSize="large" />
        </Wrapper>
      ) : (
        <UniformLogo />
      )}
    </>
  );
});

const Wrapper = styled(ClearLink)`
  ${RightButtonWrapper}
`;

const Icon = styled(PlaylistAddIcon)`
  position: absolute;
  top: 9px;
  right: 25px;
`;
