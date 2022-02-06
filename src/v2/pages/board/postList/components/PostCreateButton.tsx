import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { generatePath } from 'react-router-dom';

import { PencilIcon } from '@/components/atoms/Icon';
import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';
import { ClearLink, RightButtonWrapper } from '@/v2/components';

export const PostCreateButton: React.FC = observer(() => {
  const {
    post: { boardId, writable },
  } = useRootStore();

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
