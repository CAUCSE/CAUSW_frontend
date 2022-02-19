import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { generatePath, useParams } from 'react-router-dom';

import { PencilIcon } from '@/components/regacy/atoms/Icon';
import { PAGE_URL, PostParams } from '@/configs/path';
import { ClearLink, RightButtonWrapper } from '@/v2/components';
import { usePageUiStore } from '@/v2/hooks';

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

const Icon = styled(PencilIcon)`
  position: absolute;
  top: 14px;
  right: 20px;
`;
