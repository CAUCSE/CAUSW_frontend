import styled from 'styled-components';
import { generatePath } from 'react-router';
import { observer } from 'mobx-react-lite';
import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';
import { RightButtonWrapper } from '@/components/header/styled';
import { PencilIcon } from '@/components/atoms/Icon';
import { ClearLink } from '@/components/atoms/clear';

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
