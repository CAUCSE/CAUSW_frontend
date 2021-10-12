import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { useRootStore } from '@/stores/RootStore';
import { ClearLink } from '@/components/atoms/clear';
import { generatePath } from 'react-router';
import { PAGE_URL } from '@/configs/path';

export const PostCreateButton: React.FC = observer(() => {
  const {
    board: { boardId, writable },
  } = useRootStore();

  return boardId && writable ? (
    <WriteButton to={generatePath(PAGE_URL.PostWrite, { boardId })}>
      <img src="/images/icons/pencil.svg" alt="pencil icon" />
    </WriteButton>
  ) : null;
});

const WriteButton = styled(ClearLink)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
`;
