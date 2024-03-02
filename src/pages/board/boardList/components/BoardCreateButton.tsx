import styled from '@emotion/styled';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { observer } from 'mobx-react-lite';
import { generatePath, useParams } from 'react-router-dom';

import { ClearLink, RightButtonWrapper } from '@/components';
import { PAGE_URL, PostParams } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

export const BoardCreateButton: React.FC = observer(() => {
  return (
    <Wrapper to={generatePath(PAGE_URL.BoardCreate)}>
      <Icon fontSize="large" />
    </Wrapper>
  );
});

const Wrapper = styled(ClearLink)`
  ${RightButtonWrapper}
`;

const Icon = styled(AddBoxIcon)`
  position: absolute;
  top: 11px;
  right: 20px;
`;
