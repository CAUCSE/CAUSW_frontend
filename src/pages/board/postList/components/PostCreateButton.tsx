import styled from '@emotion/styled';
import CreateIcon from '@mui/icons-material/Create';
import { observer } from 'mobx-react-lite';
import { generatePath, useParams } from 'react-router-dom';

import { ClearLink, RightButtonWrapper } from '@/components';
import { PAGE_URL, PostParams } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

export const PostCreateButton: React.FC = observer(() => {
  const { boardId } = useParams<PostParams>();
  const { writable } = usePageUiStore<PageUiStore.PostList>();

  return writable ? (
    <Wrapper to={generatePath(PAGE_URL.PostWrite, { boardId })}>
      <Icon />
    </Wrapper>
  ) : null;
});

const Wrapper = styled(ClearLink)`
  ${RightButtonWrapper}
`;

const Icon = styled(CreateIcon)`
  position: absolute;
  top: 14px;
  right: 20px;
`;
