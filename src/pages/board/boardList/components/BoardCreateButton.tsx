import styled from '@emotion/styled';
import CreateIcon from '@mui/icons-material/Create';
import { observer } from 'mobx-react-lite';
import { generatePath, useParams } from 'react-router-dom';

import { ClearLink, RightButtonWrapper } from '@/components';
import { PAGE_URL, PostParams } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

export const BoardCreateButton: React.FC = observer(() => {
  return (
    <Wrapper to={generatePath(PAGE_URL.BoardCreate)}>
      <Icon />
    </Wrapper>
  );
});

const Wrapper = styled(ClearLink)`
  ${RightButtonWrapper}
`;

const Icon = styled(CreateIcon)`
  position: absolute;
  top: 14px;
  right: 20px;
`;
